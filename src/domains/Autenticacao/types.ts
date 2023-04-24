const enum UsuariosTypes {
 funcionario,
 hospede,
 master
}

export interface Endereco {
 logradouro: string;
 bairro: string;
 cidade: string;
 numero: number;
 pais: string;
}

export interface Usuario {
 id: string;
 nome: string;
 email: string;
 password: string;
 cpf: string;
 telefone: string;
 idEndereco: Endereco[];
 type: UsuariosTypes;
}
