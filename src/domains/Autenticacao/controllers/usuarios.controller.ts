import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { Usuario } from "../types";
import { hashSync, compareSync } from "bcrypt";

const usuarios: Usuario[] = [];

const SALT_ROUNDS = 10;

const createUser = (req: Request, res: Response) => {
  const { nome: nome, email, password } = req.body;

  const hashedPassword = hashSync(password, SALT_ROUNDS);
  const id = uuid();

  const usuario: Usuario = {
    id,
    nome,
    email,
    password: hashedPassword,
  };

  usuarios.push(usuario);

  res.status(201).json(usuario);
};

const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email, password } = req.body;

  const usuario = usuarios.find((usuario) => usuario.id === id);

  if (!usuario) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  usuario.nome = nome || usuario.nome;
  usuario.email = email || usuario.email;

  if (password) {
    const hashedPassword = hashSync(password, SALT_ROUNDS);
    usuario.password = hashedPassword;
  }

  res.json(usuario);
};

const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  const index = usuarios.findIndex((usuario) => usuario.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  usuarios.splice(index, 1);

  res.json({ message: "Usuário deletado com sucesso!" });
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

  res.json({ message: "Login realizado com sucesso!" });
};

const listUsers = (_: Request, res: Response) => {
 res.json(usuarios);
};

export const listUserById = (req: Request, res: Response) => {
 const { id } = req.params;

 const usuario = usuarios.find((usuario) => usuario.id === id);

 if (!usuario) {
   return res.status(404).json({ message: "Usuário não encontrado" });
 }

 res.json(usuario);
};

export const UsuariosController = {
 createUser,
 updateUser,
 loginUser,
 deleteUser,
 listUsers,
 listUserById
}