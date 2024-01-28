import type { Sequelize } from 'sequelize'
import { DataTypes } from 'sequelize'
import { models } from '@model'

async function createUserModel (sequelizeInstance: Sequelize) {
    const UserModel = sequelizeInstance.define(
        'user', {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            application: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: models.get('application'),
                    key: 'id'
                }
            }
        }
    )

    models.set('user', UserModel)

    try {
        UserModel.sync({ alter: true })
        console.log('Application schema created/synchronized successfully.')
    } catch (error) {
        console.error('Unable to create/synchronize application schema:', error)
    }
}

export default createUserModel
