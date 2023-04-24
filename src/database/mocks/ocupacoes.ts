import { Ocupacao } from 'domains/Reservas/types'
import quartosMock from "./quartos";

export const OcupacoesMock: Ocupacao[] = [
 {
   id: 0,
   codConfirmacao: 1,
   idQuarto: quartosMock[0],
   idReserva: {
     id: 0,
     dtInicio: "21/03/2023",
     dtFim: "26/04/2023",
     confirmada: 0,
     cpfHospede: {
       id: '123125',
       cpf: "490.522.840-91",
       nome: "Senhor Lorem Ipsun",
       email: "loremipsuno@email.com",
       telefone: "+558198121289",
       password: "loremipsun#11",
       type: 1,
       endereco: [{
        logradouro: "Rua Lorem Ipsum",
        bairro: "Lorem Ipsum",
        cidade: "Lorem Ipsum",
        numero: 123,
        pais: "Lorem Ipsum",
       }],
     },
   },
 },
 {
   id: 1,
   codConfirmacao: 0,
   idQuarto: quartosMock[1],
   idReserva: {
     id: 1,
     dtInicio: "25/03/2023",
     dtFim: "30/04/2023",
     confirmada: 1,
     cpfHospede: {
       id: '12312567',
       cpf: "123.456.789-10",
       nome: "Senhora Ipsum Dolor",
       email: "ipsumdolor@email.com",
       telefone: "+5581987654321",
       password: "ipsumdolor#22",
       type: 1,
       endereco: [{
        logradouro: "Rua Lorem Ipsum",
        bairro: "Lorem Ipsum",
        cidade: "Lorem Ipsum",
        numero: 123,
        pais: "Lorem Ipsum",
       }],
     },
   },
 },
 {
   id: 2,
   codConfirmacao: 1,
   idQuarto: quartosMock[2],
   idReserva: {
     id: 2,
     dtInicio: "30/03/2023",
     dtFim: "02/05/2023",
     confirmada: 0,
     cpfHospede: {
       id: '1231256789',
       cpf: "987.654.321-00",
       nome: "Senhorita Dolor Sit Amet",
       email: "dolorsitamet@email.com",
       telefone: "+5581976543210",
       password: "dolorsitamet#33",
       type: 1,
       endereco: [{
        logradouro: "Rua Lorem Ipsum",
        bairro: "Lorem Ipsum",
        cidade: "Lorem Ipsum",
        numero: 123,
        pais: "Lorem Ipsum",
       }],
     },
   },
 },
];