import express from 'express'
import { createUserHandler, loginUserHandler } from '@controller'

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

/**
 * @openapi
 * /user/signin:
 *   post:
 *      tags:
 *          - User
 *      summary: Login user and get token
 *      description: Login user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: User is logged in
 *              content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               token:
 *                                   type: string
 *                               user:
 *                                   type: string
 *          401:
 *              description: Wrong credentials
 *          500:
 *              description: User login error
 */
router.post('/signin', async (req, res) => {
    loginUserHandler(req, res)
})

export default router
