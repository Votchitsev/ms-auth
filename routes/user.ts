import express from 'express'
import { createUserHandler, loginUserHandler, logoutUserHandler, verifyUserHandler } from '@controller'

const router = express.Router()

/**
 * @openapi
 * /user/signup/:
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
 *                          applicationToken:
 *                              type: string
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

/**
 * @openapi
 * /user/logout/{applicationToken}/{authToken}:
 *  post:
 *      tags:
 *          - User
 *      summary: Logout user
 *      description: Logout user
 *      parameters:
 *            - name: authToken
 *              in: path
 *              schema:
 *                type: string
 *            - name: applicationToken
 *              in: path
 *              schema:
 *                type: string
 *      responses:
 *          200:
 *              description: User is logged out
 *          401:
 *              description: Unauthorized
 *          500:
 *              description: User logout error
 */
router.post('/logout/:applicationToken/:authToken', async (req, res) => {
    logoutUserHandler(req, res)
})

/**
 * @openapi
 * /user/verify/{applicationToken}/{authToken}:
 *  get:
 *      tags:
 *          - User
 *      summary: Verify user
 *      description: Verify user
 *      parameters:
 *            - name: authToken
 *              in: path
 *              schema:
 *                type: string
 *            - name: applicationToken
 *              in: path
 *              schema:
 *                type: string
 *      responses:
 *          200:
 *              content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               id:
 *                                   type: number
 *                               user:
 *                                   type: string
 *          401:
 *              description: Unauthorized
 *          500:
 *              description: User verification error
 */
router.get('/verify/:applicationToken/:authToken', (req, res) => {
    verifyUserHandler(req, res)
})

export default router
