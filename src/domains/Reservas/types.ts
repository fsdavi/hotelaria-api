import { Quarto } from "../Quartos/types";
import { Usuario } from "../Autenticacao/types";

export interface Ocupacao {
 id: number;
 codConfirmacao: number;
 idQuarto: Quarto;
 idReserva: {
  id: number;
  dtInicio: string;
  dtFim: string;
  confirmada: number;
  cpfHospede: Usuario
 }
}