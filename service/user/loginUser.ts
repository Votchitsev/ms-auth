import type { Request, Response } from 'express'
import { models } from '@model'
import { generateToken } from '@utils'

async function loginUser (userId: number, req: Request, res: Response) {
    try {
        const TokenModel = models.get('token')

        const generatedToken = generateToken(32)

        const [token, created] = await TokenModel.findOrCreate({
            where: {
                token: generatedToken
            },
            defaults: {
                token: generatedToken,
                user: userId
            }
        })

        if (!created) {
            return await loginUser(userId, req, res)
        }

        const { username } = req.body

        res.status(200)
            .send({
                token: token.token,
                user: username
            })
    } catch (error) {
        res.status(500)
            .send(`User login error: ${error}`)
    }
}

export default loginUser
