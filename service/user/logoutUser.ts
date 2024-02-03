import type { Response } from 'express'
import { models } from '@model'

const logoutUser = async (token: string, applicationToken: string, res: Response) => {
    const TokenModel = models.get('token')
    const UserModel = models.get('user')
    const ApplicationModel = models.get('application')

    try {
        const user = ApplicationModel.findOne({
            where: {
                token: applicationToken
            },
            include: [
                {
                    model: UserModel,
                    require: true,
                    include: [
                        {
                            model: TokenModel,
                            require: true,
                            where: {
                                token
                            }
                        }
                    ]
                }
            ]
        })

        console.log(user)

        if (!user) {
            res.status(404)
                .send('user not found')
        }
    } catch (error) {
        res.status(500)
            .send('')
    }

    try {
        const deleted = await TokenModel.destroy({
            where: {
                token
            }
        })

        if (!deleted) {
            return res.status(404)
                .send('Token not found')
        }

        res.status(200)
            .send('User logged out')
    } catch (error) {
        console.error('Unable to logout user:', error)
    }
}

export default logoutUser
