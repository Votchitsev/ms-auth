import type { Response } from 'express'
import { models } from '@model'

const deleteUser = async (authToken: string, applicationToken: string, res: Response) => {
    const UserModel = models.get('user')
    const TokenModel = models.get('token')
    const ApplicationModel = models.get('application')

    const user = await UserModel.findOne({
        include: [
            {
                model: TokenModel,
                required: true,
                where: {
                    token: authToken
                }
            },
            {
                model: ApplicationModel,
                required: true,
                where: {
                    token: applicationToken
                }
            }
        ]
    })

    if (!user) {
        return res.status(404)
            .send('User not found')
    }

    await TokenModel.destroy({
        where: {
            userId: user.id
        }
    })

    const deleted = await user.destroy({
        cascade: true
    })

    if (!deleted) {
        return res.status(404)
            .send('User not found')
    }

    return res.status(200)
        .send('User deleted')
}

export default deleteUser
