const { getOneUser: getOneUserUseCase } = require('../../2-business/usecase/user')

module.exports = async ({ id }) => {
    return getOneUserUseCase({ id });
}