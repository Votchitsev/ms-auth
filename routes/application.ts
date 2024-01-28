import express from 'express'
import type { Request, Response } from 'express'
import { createApplicationHandler, deleteApplicationHandler } from '@controller'

const router = express.Router()

/**
 * @openapi
 * /application:
 *  post:
 *      tags:
 *      - Application
 *      summary: Create application
 *      description: Create application
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: Application is created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name: string
 *                              token: string
 *          500:
 *              description: Application creation error
 */
router.post('/', async (req: Request, res: Response) => {
    const { name } = req.body

    try {
        const application = await createApplicationHandler(name)
        res.status(200)
            .send(application)
    } catch (error) {
        res.status(500).send(`Application creation error: ${error}`)
    }
})

/**
 * @openapi
 * /application/{token}:
 *  delete:
 *    tags:
 *    - Application
 *    summary: Delete application
 *    description: Delete application
 *    parameters:
 *      - name: token
 *        in: path
 *        description: Application token
 *        required: true
 *    responses:
 *       200:
 *          description: Application is deleted
 *       500:
 *          description: Application deletion error
 */
router.delete('/:token', async (req: Request, res: Response) => {
    const { token } = req.params

    try {
        await deleteApplicationHandler(token)
        res.status(200)
            .send('Application is deleted')
    } catch (error) {
        res.status(500)
            .send(`Application deletion error: ${error}`)
    }
})

export default router
