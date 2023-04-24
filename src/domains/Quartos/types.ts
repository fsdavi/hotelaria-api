export interface Avaria {
 hrRegistro: Date;
 dtRegistro: Date;
 item: string;
}

export interface Quarto {
 id: number;
 nome: string;
 descricao: string;
 capacidade: number;
 camaCasal: number;
 camaSolteiro: number;
 diaria: number;
 disponivel: boolean;
 numero: number;
 avarias?: Avaria[];
}