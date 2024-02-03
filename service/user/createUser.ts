import type { Response } from 'express'
import { models } from '@model'
import Password from './hashedPassword'

async function createUser (name: string, password: string, applicationToken: string, res: Response) {
    Password.toHash(password, async (err: string, hash: string) => {
        if (err) {
            res.status(500)
                .send(`User creation error: ${err}`)
        }

        const userModel = models.get('user')
        const applicationModel = models.get('application')

        const application = await applicationModel.findOne({
            where: {
                token: applicationToken
            }
        })

        if (!application) {
            return res.status(404)
                .send('Application not found')
        }

        const [user, created] = await userModel.findOrCreate({
            where: {
                name,
                applicationId: application.id
            },
            defaults: {
                name,
                password: hash
            }
        })

        if (created) {
            return res.status(201)
                .send({
                    name: user.name
                })
        }

        return res.status(409)
            .send('User already exists')
    })
}

export default createUser
