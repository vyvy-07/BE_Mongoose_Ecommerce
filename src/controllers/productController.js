const {
  detailProductService,
  createNewService,
  getAllService,
  updateProduct,
  deleteProduct,
} = require('../services/ProductService');

const getDetailProduct = async (req, res) => {
  try {
    const param = req.params?.param;
    const response = await detailProductService(param);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const postNewProduct = async (req, res) => {
  try {
    const data = req?.body;
    const response = await createNewService(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const updateProducts = async (req, res) => {
  try {
    const data = req?.body;
    const param = req.params?.param;
    const response = await updateProduct(param, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const deleteProducts = async (req, res) => {
  try {
    const data = req?.body;
    const param = req.params?.param;
    const response = await deleteProduct(param);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const allProducts = async (req, res) => {
  try {
    // const data = req?.body;
    const response = await getAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  getDetailProduct,
  postNewProduct,
  allProducts,
  updateProducts,
  deleteProducts,
};
