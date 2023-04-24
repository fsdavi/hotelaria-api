import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { Usuario } from "../types";
import { hashSync, compareSync } from "bcrypt";
import { sequelize } from "../../../database";
import { UsuarioModel } from "../models/user.model";

const usuarios: Usuario[] = [
 {
  id: '0',
  nome: 'Master',
  email: 'master@email.com',
  password: 'master',
  cpf: '000.000.000-00',
  telefone: '(00) 00000-0000',
  idEndereco: [],
  type: 2
 }
];

const SALT_ROUNDS = 10;

const createUser = async (req: Request, res: Response) => {
 const { nome, email, password, cpf, telefone, idEndereco, type } = req.body;

 const hashedPassword = hashSync(password, SALT_ROUNDS);
 const id = uuid();

 try {
   const usuarioExistente = await UsuarioModel.findOne({ where: { cpf: cpf } });

   if (usuarioExistente) {
     return res
       .status(400)
       .json({ message: `Já existe um usuário com o CPF ${cpf}` });
   }

   const novoUsuario = await UsuarioModel.create({
     id,
     nome,
     email,
     password: hashedPassword,
     cpf,
     telefone,
     idEndereco,
     type: type ?? 1,
   });

   return res.status(201).json(novoUsuario);
 } catch (err) {
   console.error("Erro ao criar usuário:", err);
   return res.status(500).json({ message: "Erro interno do servidor" });
 }
};

const updateUser = async (req: Request, res: Response) => {
 const { id } = req.params;

 try {
   const usuario = await UsuarioModel.findByPk(`${id}`);

   if (!usuario) {
     return res.status(404).json({ message: "Usuário não encontrado" });
   }

   const usuarioAtualizado = await usuario.update(req.body);

   return res.status(200).json({
     message: "Usuário atualizado com sucesso",
     user: usuarioAtualizado,
   });
 } catch (err) {
   console.error("Erro ao atualizar usuário:", err);
   return res.status(500).json({ message: "Erro interno do servidor" });
 }
};

const deleteUser = async (req: Request, res: Response) => {
 const { id } = req.params;

 try {
   const usuario = await UsuarioModel.findByPk(id);

   if (!usuario) {
     return res.status(404).json({ message: "Usuário não encontrado" });
   }

   await usuario.destroy();

   return res.status(200).json({ message: "Usuário deletado com sucesso!" });
 } catch (err) {
   console.error("Erro ao deletar usuário:", err);
   return res.status(500).json({ message: "Erro interno do servidor" });
 }
};

const loginUser = async (req: Request, res: Response) => {
 const { email, password } = req.body;

 try {
   const usuario = await UsuarioModel.findOne({ where: { email: email } });

   if (!usuario) {
     return res.status(401).json({ message: "Credenciais inválidas" });
   }

   const passwordInvalido = !compareSync(password, usuario.password);

   if (passwordInvalido) {
     return res.status(401).json({ message: "Credenciais inválidas" });
   }

   return res
     .status(200)
     .json({ message: "Login realizado com sucesso!", usuario: usuario });
 } catch (err) {
   console.error("Erro ao realizar login:", err);
   return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const listUsers = async (_: Request, res: Response) => {
 try {
   const usuarios = await UsuarioModel.findAll();
   return res.status(200).json(usuarios);
 } catch (err) {
   console.error(err);
   return res.status(500).json({ message: "Erro ao buscar usuários" });
 }
};

export const listUserById = async (req: Request, res: Response) => {
 const { id } = req.params;

 try {
  const usuario = await UsuarioModel.findByPk(`${id}`);

  if (!usuario) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  return res.status(200).json({
    user: usuario,
  });
} catch (err) {
  console.error("Erro ao buscar usuário:", err);
  return res.status(500).json({ message: "Erro interno do servidor" });
}
};

export const UsuariosController = {
 createUser,
 updateUser,
 loginUser,
 deleteUser,
 listUsers,
 listUserById
}