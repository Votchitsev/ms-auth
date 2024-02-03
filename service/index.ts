/**
 * Module contains services
 */

import createUser from './user/createUser'
import getUser from './user/getUser'
import Password from './user/hashedPassword'
import loginUser from './user/loginUser'
import logoutUser from './user/logoutUser'
import verifyUser from './user/verifyUser'
import deleteUser from './user/deleteUser'

export {
    createUser,
    getUser,
    Password,
    loginUser,
    logoutUser,
    verifyUser,
    deleteUser
}
