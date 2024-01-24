import express from 'express'
import type { Request, Response } from 'express'

const router = express.Router()

/**
 * @openapi
 * /application:
 *  get:
 *      tags:
 *      - Application
 *      summary: Responds if the server is up
 *      description: Responds if the server is up
 */
router.get('/', (req: Request, res: Response) => {
    res.send('Test Endpoint')
})

export default router
