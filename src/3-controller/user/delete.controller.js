const { deleteUser: deleteUserUseCase } = require('../../2-business/usecase/user')

module.exports = async ({ id }) => {
    return deleteUserUseCase(id);
}