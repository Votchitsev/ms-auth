import { models } from '@model'

async function getUser (username: string, applicationToken: string) {
    const ApplicationModel = models.get('application')
    const user = await models.get('user').findOne({
        where: {
            name: username
        },
        include: [
            {
                model: ApplicationModel,
                required: true,
                where: {
                    token: applicationToken
                }
            }
        ]
    })

    return user
}

export default getUser
