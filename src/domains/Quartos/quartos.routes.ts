import express from 'express';
import {QuartosController} from './controllers/quartos.controller';

const router = express.Router();

// Rota para criar um novo quarto
router.post('/rooms', QuartosController.createRoom);

// Rota para obter todos os quartos
router.get('/rooms', QuartosController.getAllRooms);

// Rota para obter um quarto específico
router.get('/rooms/:id', QuartosController.getRoomById);

// Rota para atualizar um quarto
router.put('/rooms/:id', QuartosController.updateRoom);

// Rota para excluir um quarto
router.delete('/rooms/:id', QuartosController.deleteRoom);

export default router;