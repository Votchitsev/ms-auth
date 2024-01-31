import type { Request, Response } from 'express'
import { createUser, getUser, Password, loginUser } from '@service'

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
    const { username, password } = req.body

    const user = await getUser(username)

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
