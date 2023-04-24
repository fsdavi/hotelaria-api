import { Router } from "express";
import quartosRouter  from '../domains/Quartos/quartos.routes';
import authRouter from '../domains/Autenticacao/auth.routes'

const mainRouter = Router()

mainRouter.use('/', quartosRouter)
mainRouter.use('/', authRouter)

export default mainRouter;