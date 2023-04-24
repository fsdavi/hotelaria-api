import { Request, Response } from "express";
import { Quarto } from "../types";
import QuartosMock from "../../../database/mocks/quartos";
import { QuartoModel } from '../models/quartos.model'

import { v4 as uuid } from "uuid";
import path from 'path'
import fs from 'fs';

let quartosMock = QuartosMock

const createRoom = async (req: Request, res: Response) => {
 const id = uuid();

 try {
   const novoQuarto: Quarto = {
    id,
     ...req.body
   };

   const quartoCriado = await QuartoModel.create(novoQuarto);

   res.status(201).json({
     message: "Quarto criado com sucesso",
     quarto: quartoCriado,
   });
 } catch (error: any) {
   console.error(error);
   res.status(500).json({
     message: "Erro ao criar quarto",
     error: error.message,
   });
 }
};


const getAllRooms = (_: Request, res: Response) => {
  res.status(200).json({
    message: "Quartos encontrados com sucesso",
    quartos: quartosMock,
  });
};

const getRoomById = (req: Request, res: Response) => {
  const quartoId = req.params.id;
  const quarto = quartosMock.find((quarto) => quarto.id === quartoId);

  if (!quarto) {
    res.status(404).json({
      message: "Quarto não encontrado",
    });
  } else {
    res.status(200).json({
      message: "Quarto encontrado com sucesso",
      quarto,
    });
  }
};

const updateRoom = (req: Request, res: Response) => {
  const quartoId = req.params.id;

  const quartoIndex = quartosMock.findIndex((quarto) => quarto.id === quartoId);

  if (quartoIndex === -1) {
    res.status(404).json({
      message: "Quarto não encontrado",
    });
  } else {
    const quartoAtualizado: Quarto = {
      ...quartosMock[quartoIndex],
     ...req.body
    };

    quartosMock[quartoIndex] = quartoAtualizado;

    res.status(200).json({
      message: "Quarto atualizado com sucesso",
      quarto: quartoAtualizado,
    });
  }
};

const deleteRoom = (req: Request, res: Response) => {
  const quartoId = req.params.id;

  const quartoIndex = quartosMock.findIndex((quarto) => quarto.id === quartoId);

  if (quartoIndex === -1) {
    res.status(404).json({
      message: "Quarto não encontrado",
    });
  } else {
    const quartoDeletado = quartosMock[quartoIndex];

    quartosMock.splice(quartoIndex, 1);

    res.status(200).json({
      message: "Quarto excluído com sucesso",
      quarto: quartoDeletado,
    });
  }
};

const getRoomImage = (req: Request, res: Response) => {
 const imageName = req.params.imageName;
 const imagePath = path.join(process.cwd(), 'src/database/images/quartos', imageName);
 const buffer = fs.readFileSync(imagePath);
 const imageBase64 = buffer.toString('base64');
 // Verifique se o arquivo existe
 if (imageBase64) {
   // Envie o caminho completo da imagem como resposta JSON
   res.json({ image: imageBase64 });
 } else {
   res.status(404).send({message: 'Imagem não encontrada', path: imagePath});
 }
}

export const QuartosController = {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  getRoomImage
};
