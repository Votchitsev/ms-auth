import type { Sequelize } from 'sequelize'
import { DataTypes } from 'sequelize'
import { models } from '@model'

async function createTokenModel (sequelizeInstance: Sequelize) {
    const TokenModel = sequelizeInstance.define(
        'token', {
            token: {
                type: DataTypes.STRING
            },
            user: {
                type: DataTypes.INTEGER,
                references: {
                    model: models.get('user'),
                    key: 'id'
                }
            }
        }
    )

    models.set('token', TokenModel)

    try {
        TokenModel.sync({ alter: true })
        console.log('Token schema created/synchronized successfully.')
    } catch (error) {
        console.error('Unable to create/synchronize token schema:', error)
    }
}

export default createTokenModel
