const { createUser: createUserUseCase } = require('../../2-business/usecase/user')

module.exports = async (user) => {
    return createUserUseCase(user);
}