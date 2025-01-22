const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const GeneralToken = require('./JWTService');
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { email, fullName, password, phone, isAdmin, confirmPassword } =
      newUser;
    try {
      const checkEmailUser = await User.findOne({
        email: email,
      });
      if (checkEmailUser) {
        resolve({
          status: 'Err',
          message: 'Email was exist!',
        });
      }
      const hash = bcrypt.hashSync(password, 10);
      console.log('hash', hash);
      const newM = await User.create({
        email,
        fullName,
        password: hash,
        phone,
        isAdmin,
      });
      if (newM) {
        resolve({
          status: 'Ok',
          message: 'CREATED SUCCESS!',
          data: { email: newM?.email, fullName: newM?.fullName },
        });
      } else {
        console.log('11111', 11111);
      }
    } catch (error) {
      reject(error);
    }
  });
};
const loginUser = (dataLogin) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, password, isAdmin } = dataLogin;
      const checkUser = await User.find({
        email: email,
      });

      if (!checkUser) {
        resolve(400, {
          status: 'Err',
          message: 'Email was not exist!',
        });
      } else {
        const pass = checkUser[0]?.password;
        const comparePassword = await bcrypt.compareSync(password, pass);

        if (!comparePassword) {
          resolve({
            status: 'Not found',
            message: 'Password is not true!',
          });
        }
      }
      if (checkUser[0]?.isAdmin != isAdmin) {
        resolve({
          status: 'Not found',
          message: "Can't login! Are you admin?",
        });
      }

      const token = await GeneralToken.GeneralAccessToken({
        id: checkUser._id,
        isAdmin: checkUser.isAdmin,
      });
      const refreshToken = await GeneralToken.GeneralRefreshToken({
        id: checkUser._id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        status: 'ok',
        message: 'Login Success!',
        token,
        refreshToken,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const updateUser = (userId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        _id: userId,
      });
      if (!checkUser) {
        resolve({
          status: 'Err',
          message: 'userId not exist!',
        });
      }
      const updateUser = await User.findByIdAndUpdate(userId, data, {
        new: true,
      });
      console.log('updateUser', updateUser);
      resolve({
        status: 'ok',
        message: ' Success!',
        data: updateUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('userId', userId);
      const checkUser = await User.findOne({
        _id: userId,
      });
      if (!checkUser) {
        resolve({
          status: 'Err',
          message: 'userId not exist!',
        });
      }
      await User.findByIdAndDelete(userId);
      const updatedUserList = await User.find({});

      resolve({
        status: 'ok',
        message: 'Delete success!',
        data: updatedUserList,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const getProfileUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        email: data?.email,
        password: data?.password,
      });
      if (!checkUser) {
        resolve({
          status: 'Err',
          message: 'user not exist!',
        });
      }
      console.log('checkUser', checkUser);
      resolve({
        status: 'ok',
        message: 'get profile success!',
        data: checkUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const allProfileUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const listUser = await User.find({});
      console.log('listUser :>> ', listUser);
      resolve({
        status: 'ok',
        message: 'get list User success!',
        data: listUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getProfileUser,
  allProfileUser,
};
