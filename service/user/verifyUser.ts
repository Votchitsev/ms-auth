import { models } from '@model'

async function verifyUser (authToken: string) {
    console.log(models)

    const UserModel = models.get('user')
    const TokenModel = models.get('token')

    return await UserModel.findOne({
        include: [{
            model: TokenModel,
            require: true,
            where: {
                token: authToken
            }
        }]
    })
}

export default verifyUser
