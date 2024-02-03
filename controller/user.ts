import type { Request, Response } from 'express'
import { createUser, getUser, Password, loginUser, logoutUser, verifyUser } from '@service'

export const createUserHandler = async (req: Request, res: Response) => {
    const { name, password, confirmPassword, applicationToken } = req.body

    try {
        if (password !== confirmPassword) {
            return res.status(400)
                .send('Passwords do not match')
        }

        createUser(name, password, applicationToken, res)
    } catch (error) {
        res.status(500)
            .send(`User creation error: ${error}`)
    }
}

export const loginUserHandler = async (req: Request, res: Response) => {
    const { username, password, applicationToken } = req.body

    const user = await getUser(username, applicationToken)

    if (!user) {
        return res.status(404)
            .send('User not found')
    }

    const passwordMatch = await Password.verify(password, user.password)

    if (!passwordMatch) {
        return res.status(401)
            .send('Wrong password')
    }

    loginUser(user.id, req, res)
}

export const logoutUserHandler = async (req: Request, res: Response) => {
    const { authToken, applicationToken } = req.params

    if (!authToken) {
        return res.status(401)
            .send('Unauthorized')
    }

    if (!applicationToken) {
        return res.status(404)
            .send('Application token not provided')
    }

    await logoutUser(authToken, applicationToken, res)
}

export const verifyUserHandler = async (req: Request, res: Response) => {
    const { authToken } = req.params

    if (!authToken) {
        return res.status(401)
            .send('Unauthorized')
    }

    try {
        const user = await verifyUser(authToken)

        if (!user) {
            return res.status(401)
                .send('Unauthorized')
        }

        return res.status(200)
            .send({
                id: user.id,
                username: user.name
            })
    } catch (error) {
        return res.status(500)
            .send(`User verification error: ${error}`)
    }
}
