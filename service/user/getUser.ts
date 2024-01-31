import { models } from '@model'

async function getUser (username: string) {
    const user = await models.get('user').findOne({
        where: {
            name: username
        }
    })

    return user
}

export default getUser
