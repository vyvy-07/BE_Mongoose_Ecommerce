const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const GeneralAccessToken = async (payload) => {
  const token = jwt.sign({ payload }, process.env.ACCESS_TOKEN, {
    expiresIn: '1h',
  });
  return token;
};
const GeneralRefreshToken = async (payload) => {
  const refresh_Token = jwt.sign({ payload }, process.env.REFRESH_TOKEN, {
    expiresIn: '365',
  });
  return refresh_Token;
};

module.exports = { GeneralAccessToken, GeneralRefreshToken };
