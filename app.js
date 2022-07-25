const express = require('express')
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//imports routes
const postRoutes = require('./routes/post.js')

// const aMiddleware = (req, res, next) => {
//   console.log('middle ware is here!');
//   next();
// }

app.use(morgan("dev"));
//middleware for auth or validation
// app.use(aMiddleware);
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`A Node JS is listening on port: ${port}`);
})