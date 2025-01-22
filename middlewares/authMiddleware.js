const jwt = require('jsonwebtoken');
const authMiddleware = (req, res) => {
  jwt.verify(token, '', () => {
    console.log('123', 123);
  });
};
module.exports = {
  authMiddleware,
};
