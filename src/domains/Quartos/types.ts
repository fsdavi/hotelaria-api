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

export interface TipoQuarto {
 nome: string,
 descricao: string,
 capacidade: number,
 camaCasal: number,
 camaSolteiro: number,
 diaria: number,
}

export interface Quarto {
 id: number;
 status: Status;
 numero: number;
 imageName: string;
 avarias?: Avaria[];
 idTipoQuarto: TipoQuarto;
}