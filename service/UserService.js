const { User } = require('../models');

const findUserByEmail = async (email) => User.findOne({ where: { email } });

const createNewUser = async (displayName, email, password, image) =>
  User.create({ displayName, email, password, image });

module.exports = {
  findUserByEmail,
  createNewUser,
}; 