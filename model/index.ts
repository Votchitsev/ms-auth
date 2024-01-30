/**
 * Module contains sequelize schemas
 */

import createApplicationModel from './application'
import createUserModel from './user'
import createTokenModel from './token'

/* The map use for getting model in controllers. Use like this: models.get('application'). */
export const models = new Map()

export {
    createApplicationModel,
    createUserModel,
    createTokenModel
}
