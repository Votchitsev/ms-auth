import { schemas } from '@schema'
import { generateToken } from '@utils'

export const createApplicationHandler = async (name: string) => {
    const ApplicationSchema = schemas.get('application')
    const token = generateToken(16)
    const application = await ApplicationSchema.create({ name, token })

    return application
}

export const deleteApplicationHandler = async (token: string) => {
    const ApplicationSchema = schemas.get('application')

    await ApplicationSchema.destroy({ where: { token } })
}
