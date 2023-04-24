import { Router } from 'express';
import { ReservasController } from './controllers/reservas.controller';

const router = Router();

router.get('/reservas', ReservasController.getAllOcupacoes);

router.post('/reservas', ReservasController.createOcupacao);

router.put('/reservas/:id', ReservasController.updateOcupacao);

router.delete('/reservas/:id', ReservasController.deleteOcupacao);

export default router;