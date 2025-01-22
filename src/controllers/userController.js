const REGEX = require('../constants/regex');
const UserService = require('../services/UserService');
const createUser = async (req, res) => {
  try {
    const { email, fullName, password, phone, isAdmin, confirmPassword } =
      req.body;
    const isCheckEmail = REGEX.email.test(email);
    const isCheckPhone = REGEX.phone.test(phone);
    //if 1 in 5 not exist
    if (!email || !fullName || !password || !phone || !isAdmin) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The input is required!',
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The input is email!',
      });
    } else if (!isCheckPhone) {
      return res.status(200).json({
        status: 'ERR',
        message: 'Phone not valid!',
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: 'ERR',
        message: 'password not valid!',
      });
    }
    const data = req.body;
    const response = await UserService.createUser(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;
    const isCheckEmail = REGEX.email.test(email);
    //if 1 in 5 not exist
    if (!email || isAdmin == null || !password) {
      return res.status(404).json({
        status: 'Not found',
        message: 'fill in field!',
      });
    } else if (!isCheckEmail) {
      return res.status(404).json({
        status: 'Not found',
        message: 'Email not valid!',
      });
    }
    const data = req.body;
    const response = await UserService.loginUser(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const response = await UserService.updateUser(userId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await UserService.deleteUser(userId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const getProfileUser = async (req, res) => {
  try {
    console.log('req?.body', req?.body);
    const data = req?.body;
    const response = await UserService.getProfileUser(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const allProfileUser = async (req, res) => {
  try {
    const response = await UserService.allProfileUser();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getProfileUser,
  allProfileUser,
};
