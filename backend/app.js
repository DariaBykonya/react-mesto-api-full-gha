require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, MONGO_URL } = process.env;
const corsHandler = require('./middlewares/corsHandler');

const app = express();

app.use(cookieParser());
// app.use(cors());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
});

app.use(corsHandler);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.options(
//   '*',
//   cors({
//     origin: '*',
//     credentials: true,
//   }),
// );

app.use(
  cors(),
  //   {
  //   // origin: 'http://localhost:3001',
  //   exposedHeaders: ['set-cookie'],
  //   credentials: true,
  // }
);
app.use(requestLogger); // подключаем логгер запросов

app.use(router);

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());

app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
