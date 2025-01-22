const express = require('express');
const router = express.Router();

router.get('/:param'); // chi tiết 1 sản phẩm đã đặt
router.post('/create'); //Thêm vào gỏi hàng
router.put('/edit/:param'); //Sửa/cập nhật số lượng
router.get('/'); //list ordered:  danh sach san phan da dat
router.delete('/:param'); //list ordered:  danh sach san phan da dat

module.exports = router;
