/* Application sequelize schema */

import type { Sequelize } from 'sequelize'
import { DataTypes } from 'sequelize'
import { models } from '@model'

/**
 * The function creates application schema.
 * @param sequelizeInstance
 */
async function createApplicationModel (sequelizeInstance: Sequelize) {
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

    models.set('application', ApplicationSchema)

    try {
        ApplicationSchema.sync({ alter: true })
        console.log('Application schema created/synchronized successfully.')
    } catch (error) {
        console.error('Unable to create/synchronize application schema:', error)
    }
}

export default createApplicationModel
