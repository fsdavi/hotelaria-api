export interface Avaria {
 hrRegistro: Date;
 dtRegistro: Date;
 item: string;
}

export const enum Status {
 disponivel = 1,
 ocupado = 2,
 aguardando_limpeza = 3,
 indisponivel = 4
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
 id: string;
 status: Status;
 numero: number;
 imageName: string;
 avarias?: Avaria[];
 idTipoQuarto: TipoQuarto;
}