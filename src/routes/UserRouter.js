const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.createUser);
router.post('/sign-in', userController.loginUser);
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/profile', userController.getProfileUser);
router.get('/', userController.allProfileUser);
module.exports = router;

// - chưa có sử lí token middleware
//**
// muốn **/
// - shopping card
// - checkout
// - phương thức thanh toán
