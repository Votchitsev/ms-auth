import express from 'express'
import { createUserHandler } from '@controller'

const router = express.Router()

/**
 * @openapi
 * /user/signup:
 *   post:
 *      tags:
 *      - User
 *      summary: Create user
 *      description: Create user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          password:
 *                              type: string
 *                          confirmPassword:
 *                              type: string
 *                          applicationToken:
 *                              type: string
 *      responses:
 *          201:
 *              description: User is created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *          500:
 *              description: Application creation error
 */
router.post('/signup', async (req, res) => {
    createUserHandler(req, res)
})

export default router
