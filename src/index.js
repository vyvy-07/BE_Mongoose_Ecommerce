const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const Product = require('./models/ProductModel');
const User = require('./models/UserModel');
//
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// Cấu hình CORS cho phép frontend truy cập
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://be-mongoose-ecommerce.vercel.app/',
    ], // Domain của frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Cho phép gửi cookie nếu cần
  })
);

//routes
app.use(bodyParser.json());
routes(app);

mongoose
  .connect(`${process.env.MONGOOSE_DB}`)
  .then(async () => {
    const dataProduct = await Product.find({});

    console.log('Success!');
  })
  .catch((error) => console.log('error', error));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Example API endpoints
app.get('/api/products', (req, res) => {
  return res.json({ data: [] });
});
app.post('/api/products/create', (req, res) => {
  return res.json({ message: 'Product created successfully' });
});
app.get('/api/user/sign-in', (req, res) => {
  return res.json({ users: [] });
});
app.get('/api/user', (req, res) => {
  return res.json({ users: [] });
});
app.delete('/api/delete/:id', (req, res) => {
  return res.json({ message: 'Delete successfully' });
});

var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

var upload = multer({ storage: storage });

// app.get('/', (req, res) => {
//   Product.find({}).then((data, err) => {
//     if (err) {
//       console.log(err);
//     }
//     res.render('imagepage', { items: data });
//   });
// });
