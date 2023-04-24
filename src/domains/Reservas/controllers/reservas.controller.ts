import { Request, Response } from "express";
import {OcupacoesMock}  from "../../../database/mocks/ocupacoes";
import { Ocupacao } from "../types";

let ocupacoesMock = OcupacoesMock;

const createOcupacao = (req: Request, res: Response) => {
  const novaOcupacao: Ocupacao = {
   id: ocupacoesMock.length + 1,
   ...req.body,
  }

  ocupacoesMock.push(novaOcupacao);

  res.status(201).json({
    message: "Ocupação criada com sucesso",
    ocupacao: novaOcupacao,
  });
}

const updateOcupacao = (req: Request, res: Response) => {
 const ocupacaoId = Number(req.params.id);

 const ocupacaoIndex = ocupacoesMock.findIndex((ocupacao) => ocupacao.id === ocupacaoId);

 if (ocupacaoIndex === -1) {
   res.status(404).json({
     message: "Ocupação não encontrada",
   });
 } else {
   const ocupacaoAtualizada: Ocupacao = {
     ...ocupacoesMock[ocupacaoIndex],
    ...req.body
   };

   ocupacoesMock[ocupacaoIndex] = ocupacaoAtualizada;

   res.status(200).json({
     message: "Ocupação atualizada com sucesso",
     ocupacao: ocupacaoAtualizada,
   });
 }
};

const deleteOcupacao = (req: Request, res: Response) => {
 const ocupacaoId = Number(req.params.id);

 const ocupacaoIndex = ocupacoesMock.findIndex((ocupacoes) => ocupacoes.id === ocupacaoId);

 if (ocupacaoIndex === -1) {
   res.status(404).json({
     message: "Ocupação não encontrada",
   });
 } else {
   const ocupacaoDeletada = ocupacoesMock[ocupacaoIndex];

   ocupacoesMock.splice(ocupacaoIndex, 1);

   res.status(200).json({
     message: "Ocupação excluída com sucesso",
     ocupacao: ocupacaoDeletada,
   });
 }
};

const getAllOcupacoes = (_: Request, res: Response) => {
 let ocupacoesConfirmadas = ocupacoesMock.filter((ocupacao) => ocupacao.codConfirmacao === 0)
 let ocupacoesPendentes = ocupacoesMock.filter((ocupacao) => ocupacao.codConfirmacao === 1)

 res.status(200).json({
   message: "Ocupações encontradas com sucesso",
   ocupacoes: {
    pendentes: ocupacoesPendentes,
    confirmadas: ocupacoesConfirmadas
   },
 });
}

export const ReservasController = {
 createOcupacao,
 updateOcupacao,
 deleteOcupacao,
 getAllOcupacoes
}