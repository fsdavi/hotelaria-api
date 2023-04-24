// import imagem1 from "../images/quartos/1.png";
// import imagem2 from "../images/quartos/2.png";
// import imagem3 from "../images/quartos/3.png";
// import imagem4 from "../images/quartos/4.png";
// import imagem5 from "../images/quartos/5.png";
// import imagem6 from "../images/quartos/6.png";
// import imagem7 from "../images/quartos/7.png";
// import imagem8 from "../images/quartos/8.png";
// import imagem9 from "../images/quartos/9.png";
// import imagem10 from "../images/quartos/10.png";
// import imagem11 from "../images/quartos/11.png";
// import imagem12 from "../images/quartos/12.png";
// import imagem13 from "../images/quartos/13.png";
// import imagem14 from "../images/quartos/14.png";
// import imagem15 from "../images/quartos/15.png";
// import imagem16 from "../images/quartos/16.png";
import { Quarto, Status } from 'domains/Quartos/types'

const quartosMock: Quarto[] = [
 {
   id: 1,
   nome: "Quarto 1",
   descricao: "Quarto 1",
   capacidade: 2,
   camaCasal: 0,
   camaSolteiro: 2,
   status: Status.disponivel,
   numero: 101,
   diaria: 200,
   imageName: '1.png',
   avarias: []
 },
 {
   id: 2,
   nome: "Quarto 2",
   descricao: "Quarto 2",
   capacidade: 2,
   camaCasal: 1,
   camaSolteiro: 0,
   status: Status.disponivel,
   numero: 102,
   diaria: 300,
   imageName: '2.png',
   avarias: []
 },
 {
  id: 3,
  nome: "Quarto 3",
  descricao: "Quarto 3",
  capacidade: 2,
  camaCasal: 1,
  camaSolteiro: 0,
  status: Status.disponivel,
  numero: 102,
  diaria: 300,
  imageName: '3.png',
  avarias: []
},
{
 id: 4,
 nome: "Quarto 4",
 descricao: "Quarto 4",
 capacidade: 4,
 camaCasal: 1,
 camaSolteiro: 0,
 status: Status.ocupado,
 numero: 102,
 diaria: 300,
 imageName: '4.png',
 avarias: []
},
{
 id: 5,
 nome: "Quarto 5",
 descricao: "Quarto 5",
 capacidade: 5,
 camaCasal: 1,
 camaSolteiro: 3,
 status: Status.disponivel,
 numero: 108,
 diaria: 600,
 imageName: '5.png',
 avarias: []
},
{
 id: 6,
 nome: "Quarto 6",
 descricao: "Quarto 6",
 capacidade: 6,
 camaCasal: 2,
 camaSolteiro: 2,
 status: Status.disponivel,
 numero: 1066,
 diaria: 888,
 imageName: '6.png',
 avarias: []
},
{
 id: 7,
 nome: "Quarto 7",
 descricao: "Quarto 7",
 capacidade: 7,
 camaCasal: 3,
 camaSolteiro: 1,
 status: Status.aguardando_limpeza,
 numero: 132,
 diaria: 1300,
 imageName: '7.png',
 avarias: []
},
];

export default quartosMock