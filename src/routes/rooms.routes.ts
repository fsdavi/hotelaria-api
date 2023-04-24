import express from 'express';
import {RoomsController} from '../controllers/rooms.controller';

const router = express.Router();

// Rota para criar um novo quarto
router.post('/rooms', RoomsController.createRoom);

// Rota para obter todos os quartos
router.get('/rooms', RoomsController.getAllRooms);

// Rota para obter um quarto específico
router.get('/rooms/:id', RoomsController.getRoomById);

// Rota para atualizar um quarto
router.put('/rooms/:id', RoomsController.updateRoom);

// Rota para excluir um quarto
router.delete('/rooms/:id', RoomsController.deleteRoom);

export default router;