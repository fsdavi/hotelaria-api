import { Router } from 'express';
import { UsuariosController } from './controllers/usuarios.controller';

const router = Router();

// Rota para criar um novo usuario
router.post('/auth', UsuariosController.createUser);

// Rota para obter todos os usuarios
router.get('/auth', UsuariosController.listUsers);

// Rota para obter um usuário específico
router.get('/auth/:id', UsuariosController.listUserById);

// Rota para atualizar um usuário
router.put('/auth/:id', UsuariosController.updateUser);

// Rota para excluir um usuário
router.delete('/auth/:id', UsuariosController.deleteUser);

export default router;