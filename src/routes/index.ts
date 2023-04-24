import { Router } from "express";
import quartosRouter  from '../domains/Quartos/quartos.routes';
import authRouter from '../domains/Autenticacao/auth.routes'
import reservasRouter from '../domains/Reservas/reservas.routes'

const mainRouter = Router()

mainRouter.use('/', quartosRouter)
mainRouter.use('/', authRouter)
mainRouter.use('/', reservasRouter)

export default mainRouter;