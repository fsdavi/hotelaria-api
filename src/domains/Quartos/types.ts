export interface Avaria {
 hrRegistro: Date;
 dtRegistro: Date;
 item: string;
}

export const enum Status {
 disponivel,
 ocupado,
 aguardando_limpeza,
 indisponivel
}

export interface Quarto {
 id: number;
 nome: string;
 descricao: string;
 capacidade: number;
 camaCasal: number;
 camaSolteiro: number;
 diaria: number;
 status: Status;
 numero: number;
 avarias?: Avaria[];
}