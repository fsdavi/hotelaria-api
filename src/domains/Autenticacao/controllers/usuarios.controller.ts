import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { Usuario } from "../types";
import { hashSync, compareSync } from "bcrypt";

const usuarios: Usuario[] = [
 {
  id: '0',
  nome: 'Master',
  email: 'master@email.com',
  password: 'master',
  cpf: '000.000.000-00',
  telefone: '(00) 00000-0000',
  nrIdentificacao: 0,
  endereco: [],
  type: 2
 }
];

const SALT_ROUNDS = 10;

const createUser = (req: Request, res: Response) => {
  const { nome, email, password, cpf, telefone, endereco, type } = req.body;

  const hashedPassword = hashSync(password, SALT_ROUNDS);
  const id = uuid();

  const usuarioExistente = usuarios.find((usuario) => usuario.cpf === cpf);

  if(usuarioExistente) {
   return res.status(400).json({ message: `Já existe um usuário com o CPF ${cpf}`})
  }

  const usuario: Usuario = {
    id,
    nome,
    email,
    password: hashedPassword,
    cpf,
    telefone,
    endereco,
    nrIdentificacao: usuarios.length + 1,
    type: type ?? 1
  };

  usuarios.push(usuario);

  return res.status(201).json(usuario);
};

const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;

  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

  if (usuarioIndex === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  } else {
   const usuarioAtualizado: Usuario = {
      ...usuarios[usuarioIndex],
      ...req.body
   }

   usuarios[usuarioIndex] = usuarioAtualizado;

   res.status(200).json({
    message: "Usuário atualizado com sucesso",
    user: usuarioAtualizado,
  });
  }
};

const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  const index = usuarios.findIndex((usuario) => usuario.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  usuarios.splice(index, 1);

  res.status(200).json({ message: "Usuário deletado com sucesso!" });
};

const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const usuario = usuarios.find((usuario) => usuario.email === email);

  if (!usuario) {
    return res.status(401).json({ message: "Credenciais Invalidas" });
  }

  const passwordInvalido = compareSync(password, usuario.password);

  if (!passwordInvalido) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  res.status(201).json({ message: "Login realizado com sucesso!", usuario: usuario });
};

const listUsers = (_: Request, res: Response) => {
 res.status(200).json(usuarios);
};

export const listUserById = (req: Request, res: Response) => {
 const { id } = req.params;

 const usuario = usuarios.find((usuario) => usuario.id === id);

 if (!usuario) {
   return res.status(404).json({ message: "Usuário não encontrado" });
 }

 res.status(200).json(usuario);
};

export const UsuariosController = {
 createUser,
 updateUser,
 loginUser,
 deleteUser,
 listUsers,
 listUserById
}