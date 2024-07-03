const jwt = require("jsonwebtoken");

// Ensure ACCESS_TOKEN_SECRET is loaded correctly
const { ACCESS_TOKEN_SECRET } = process.env;

if (!ACCESS_TOKEN_SECRET) {
  throw new Error('ACCESS_TOKEN_SECRET is not defined in environment variables');
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
};

module.exports = {
  createAccessToken,
};
