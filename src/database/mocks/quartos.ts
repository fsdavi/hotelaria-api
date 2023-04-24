import { Quarto, Status } from 'domains/Quartos/types'

const quartosMock: Quarto[] = [
 {
   id: 1,
   status: Status.disponivel,
   numero: 101,
   imageName: '1.png',
   idTipoQuarto: {
    nome: "Quarto 1",
    descricao: "Quarto 1",
    capacidade: 2,
    camaCasal: 0,
    camaSolteiro: 2,
    diaria: 200
   },
   avarias: []
 },
 {
   id: 2,
   status: Status.disponivel,
   numero: 102,
   imageName: '2.png',
   idTipoQuarto: {
    nome: "Quarto 2",
    descricao: "Quarto 2",
    capacidade: 2,
    camaCasal: 1,
    camaSolteiro: 0,
    diaria: 300,
   },
   avarias: []
 },
 {
  id: 3,
  status: Status.disponivel,
  numero: 102,
  imageName: '3.png',
  idTipoQuarto: {
   nome: "Quarto 3",
   descricao: "Quarto 3",
   capacidade: 2,
   camaCasal: 1,
   camaSolteiro: 0,
   diaria: 300,
  },
  avarias: []
},
{
 id: 4,
 status: Status.ocupado,
 numero: 102,
 imageName: '4.png',
 idTipoQuarto: {
  nome: "Quarto 4",
  descricao: "Quarto 4",
  capacidade: 4,
  camaCasal: 1,
  camaSolteiro: 0,
  diaria: 300,
 },
 avarias: []
},
{
 id: 5,
 status: Status.disponivel,
 numero: 108,
 imageName: '5.png',
 idTipoQuarto: {
  nome: "Quarto 5",
  descricao: "Quarto 5",
  capacidade: 5,
  camaCasal: 1,
  camaSolteiro: 3,
  diaria: 600
 },
 avarias: []
},
{
 id: 6,
 status: Status.disponivel,
 numero: 1066,
 imageName: '6.png',
 idTipoQuarto: {
  nome: "Quarto 6",
  descricao: "Quarto 6",
  capacidade: 6,
  camaCasal: 2,
  camaSolteiro: 2,
  diaria: 888,
 },
 avarias: []
},
{
 id: 7,
 status: Status.aguardando_limpeza,
 numero: 132,
 imageName: '7.png',
 idTipoQuarto: {
  nome: "Quarto 7",
  descricao: "Quarto 7",
  capacidade: 7,
  camaCasal: 3,
  camaSolteiro: 1,
  diaria: 1300,
 },
 avarias: []
},
];

export default quartosMock