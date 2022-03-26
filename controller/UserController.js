const { createNewUser } = require('../service/UserService');

const createUser = async (req, res, next) => {
  try {
    const { token } = req;
    const { displayName, email, password, image } = req.body;
    await createNewUser(displayName, email, password, image);
    return res.status(201).json(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
}; 