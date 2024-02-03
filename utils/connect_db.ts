import { Sequelize } from 'sequelize'
import { createApplicationModel, createUserModel, createTokenModel, models } from '@model'

export const schemas = new Map()

async function connectDb () {
    const sequelize = new Sequelize(
        process.env.DB_NAME || 'postgres',
        process.env.DB_USER || 'postgres',
        process.env.DB_PASSWORD || 'postgres',
        {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            port: Number(process.env.DB_PORT)
        }
    )

    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
        await createApplicationModel(sequelize)
        await createUserModel(sequelize)
        await createTokenModel(sequelize)

        const UserModel = models.get('user')
        const TokenModel = models.get('token')
        const ApplicationModel = models.get('application')

        TokenModel.belongsTo(UserModel, { foreignKey: 'userId' })
        UserModel.hasMany(TokenModel, { foreignKey: 'userId' })

        UserModel.belongsTo(ApplicationModel, { foreignKey: 'applicationId' })
        ApplicationModel.hasMany(UserModel, { foreignKey: 'applicationId' })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

export default connectDb
