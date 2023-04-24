import { Quarto, Status } from 'domains/Quartos/types'

const quartosMock: Quarto[] = [
 {
   id: 1,
   status: Status.disponivel,
   numero: 101,
   imageName: '1.png',
   idTipoQuarto: {
    nome: "Suite presidencial",
    descricao: "Para noites inesquecíveis",
    capacidade: 2,
    camaCasal: 1,
    camaSolteiro: 0,
    diaria: 999
   },
   avarias: []
 },
 {
   id: 2,
   status: Status.disponivel,
   numero: 102,
   imageName: '2.png',
   idTipoQuarto: {
    nome: "Casal",
    descricao: "Para um casal",
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
  numero: 103,
  imageName: '3.png',
  idTipoQuarto: {
   nome: "Suíte acabaxi",
   descricao: "Para você se sentir no fundo do mar",
   capacidade: 2,
   camaCasal: 1,
   camaSolteiro: 0,
   diaria: 700,
  },
  avarias: []
},
{
 id: 4,
 status: Status.ocupado,
 numero: 104,
 imageName: '4.png',
 idTipoQuarto: {
  nome: "Solteiro",
  descricao: "Para uma pessoa",
  capacidade: 1,
  camaCasal: 0,
  camaSolteiro: 1,
  diaria: 100,
 },
 avarias: []
},
{
 id: 5,
 status: Status.disponivel,
 numero: 108,
 imageName: '5.png',
 idTipoQuarto: {
  nome: "Família",
  descricao: "Para a família",
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
  nome: "Quarto Aventureiros",
  descricao: "Para repousar durante as pausas das suas aventuras",
  capacidade: 6,
  camaCasal: 2,
  camaSolteiro: 2,
  diaria: 1200,
 },
 avarias: []
},
{
 id: 7,
 status: Status.aguardando_limpeza,
 numero: 132,
 imageName: '7.png',
 idTipoQuarto: {
  nome: "Triplex",
  descricao: "Estadia VIP",
  capacidade: 8,
  camaCasal: 3,
  camaSolteiro: 2,
  diaria: 2000,
 },
 avarias: []
},
];

export default quartosMock