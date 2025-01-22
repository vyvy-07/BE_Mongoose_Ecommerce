const Product = require('../models/ProductModel');

const detailProductService = (param) => {
  return new Promise(async (resolve, reject) => {
    try {
      let checkProduct;
      if (/^\d+/.test(param)) {
        checkProduct = await Product.findById(param);
      } else {
        checkProduct = await Product.findOne({
          slug: param,
        });
      }
      if (!checkProduct) {
        return resolve({
          status: 'Err',
          message: 'Product is not exist!',
        });
      }
      resolve({
        status: 'ok',
        message: 'success!',
        data: checkProduct,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const createNewService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, slug, image, type, price, rating, description, quantity } =
        data;
      const checkProduct = await Product.findOne({
        slug: slug,
      });
      if (checkProduct) {
        return resolve({
          status: 'Err',
          message: 'Product is exist!',
        });
      }
      const newProduct = await Product.create({
        name,
        slug,
        image,
        type,
        price,
        rating,
        quantity,
        description,
      });
      resolve({
        status: 'ok',
        message: 'create new product success!',
        data: newProduct,
      });
    } catch (error) {
      reject(error, 'error');
    }
  });
};
const getAllService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allProduct = await Product.find({});
      console.log('allProduct :>> ', allProduct);
      if (!allProduct) {
        resolve({
          status: 'ok',
          message: 'Something was wrong!',
        });
      }
      resolve({
        status: 'ok',
        message: 'Get list products success!',
        name: 'All product',
        data: { allProduct },
      });
    } catch (error) {
      reject(error, 'error');
    }
  });
};
const updateProduct = (param, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!param) {
        return resolve({
          status: 'Err',
          message: 'Product is not exist!',
        });
      }
      const checkProduct = await Product.findByIdAndUpdate(param, data, {
        new: true,
      });

      const updateData = resolve({
        status: 'ok',
        message: 'success!',
        data: checkProduct,
      });
    } catch (error) {
      reject(error);
    }
  });
};
const deleteProduct = (param) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!param) {
        return resolve({
          status: 'Err',
          message: 'Product is not exist!',
        });
      }
      const checkProduct = await Product.findByIdAndDelete(param, {
        new: true,
      });

      const updateData = resolve({
        status: 'ok',
        message: 'Delete success!',
        // data: checkProduct,
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  detailProductService,
  createNewService,
  getAllService,
  updateProduct,
  deleteProduct,
};
