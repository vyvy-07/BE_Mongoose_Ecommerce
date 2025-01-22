const UserRouter = require('./UserRouter');
const ProductRouter = require('./ProductRouter');
const OrderRoute = require('./OrderRoute');

const routes = (app) => {
  app.use('/api/user', UserRouter);
  app.use('/api/products', ProductRouter);
  app.use('/api/ordered', OrderRoute);
};
module.exports = routes;
