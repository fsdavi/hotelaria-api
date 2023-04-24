import { Request, Response } from "express";
import { Quarto } from "../types";

let quartos: Quarto[] = [
  {
    id: 1,
    nome: "Quarto 1",
    descricao: "Quarto 1",
    capacidade: 2,
    camaCasal: 0,
    camaSolteiro: 2,
    disponivel: true,
    numero: 101,
    diaria: 200,
    avarias: []
  },
  {
    id: 2,
    nome: "Quarto 2",
    descricao: "Quarto 2",
    capacidade: 2,
    camaCasal: 1,
    camaSolteiro: 0,
    disponivel: true,
    numero: 102,
    diaria: 300,
    avarias: []
  },
];

const createRoom = (req: Request, res: Response) => {

  const novoQuarto: Quarto = {
    id: quartos.length + 1,
    ...req.body
  };

  quartos.push(novoQuarto);

  res.status(201).json({
    message: "Quarto criado com sucesso",
    quarto: novoQuarto,
  });
};

const getAllRooms = (_: Request, res: Response) => {
  res.status(200).json({
    message: "Quartos encontrados com sucesso",
    quartos: quartos,
  });
};

const getRoomById = (req: Request, res: Response) => {
  const quartoId = Number(req.params.id);
  const quarto = quartos.find((room) => room.id === quartoId);

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
  const quartoId = Number(req.params.id);

  const quartoIndex = quartos.findIndex((quarto) => quarto.id === quartoId);

  if (quartoIndex === -1) {
    res.status(404).json({
      message: "Quarto não encontrado",
    });
  } else {
    const quartoAtualizado: Quarto = {
      ...quartos[quartoIndex],
     ...req.body
    };

    quartos[quartoIndex] = quartoAtualizado;

    res.status(200).json({
      message: "Quarto atualizado com sucesso",
      quarto: quartoAtualizado,
    });
  }
};

const deleteRoom = (req: Request, res: Response) => {
  const quartoId = Number(req.params.id);

  const quartoIndex = quartos.findIndex((quarto) => quarto.id === quartoId);

  if (quartoIndex === -1) {
    res.status(404).json({
      message: "Quarto não encontrado",
    });
  } else {
    const quartoDeletado = quartos[quartoIndex];

    quartos.splice(quartoIndex, 1);

    res.status(200).json({
      message: "Quarto excluído com sucesso",
      quarto: quartoDeletado,
    });
  }
};

export const QuartosController = {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
};
