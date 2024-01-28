import type { Express } from 'express'
import applicationRouter from './application'
import userRouter from './user'

function routes (app: Express) {
    app.use('/application', applicationRouter)
    app.use('/user', userRouter)
}

export default routes
