import type { Express } from 'express'
import applicationRouter from './application'

function routes (app: Express) {
    // app.use('/sign_in')
    // app.use('/sign_up')
    // app.use('/logout')
    app.use('/application', applicationRouter)
}

export default routes
