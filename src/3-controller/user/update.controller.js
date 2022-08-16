const { updateUser: updateUserUseCase } = require('../../2-business/usecase/user')

module.exports = async (user) => {
    return updateUserUseCase(user);
}