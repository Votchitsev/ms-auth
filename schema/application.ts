import type { Sequelize } from 'sequelize'
import { DataTypes } from 'sequelize'

async function createApplicationSchema (sequelizeInstance: Sequelize) {
    const ApplicationSchema = sequelizeInstance.define(
        'application', {
            name: {
                type: DataTypes.STRING
            },
            token: {
                type: DataTypes.STRING
            }
        }
    )

    try {
        ApplicationSchema.sync({ alter: true })
        console.log('Application schema created/synchronized successfully.')
    } catch (error) {
        console.error('Unable to create/synchronize application schema:', error)
    }
}

export default createApplicationSchema
