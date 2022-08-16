const { getAllUsers: getAllUsersUseCase } = require('../../2-business/usecase/user')

module.exports = async () => {
    return getAllUsersUseCase();
}