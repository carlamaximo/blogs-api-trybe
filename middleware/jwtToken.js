const { genToken, isValidToken } = require('../service/jwtService');

const generateToken = (req, _res, next) => {
  try {
    const { user } = req;
    const payload = { email: user.email, password: user.password };
    const token = genToken(payload);

    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};

const checkToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const tokenValid = isValidToken(authorization);

    if (!tokenValid) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateToken,
  checkToken,
}; 