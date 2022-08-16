const createUser = require('./create-user.use-case')
const getAllUsers = require('./get-all-users.use-case')
const getOneUser = require('./get-one-user.use-case')
const deleteUser = require('./delete-user.use-case')
const updateUser = require('./update-user.use-case')

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    deleteUser,
    updateUser
}