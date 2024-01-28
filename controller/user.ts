import type { Request, Response } from 'express'
import { createUser } from '@service'

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
