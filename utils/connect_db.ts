import { Sequelize } from 'sequelize'
import createApplicationSchema from '../schema/application'

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
        await createApplicationSchema(sequelize)
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

export default connectDb
