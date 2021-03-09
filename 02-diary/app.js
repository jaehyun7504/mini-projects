const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const diaryItemRoutes = require('./routes/diaryItemRoutes');
const mongoConnect = require('./utils/database').mongoConnect;

dotenv.config('./config.env');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', diaryItemRoutes);

mongoConnect(() =>
  app.listen(port, () => console.log(`Listening on port ${port}`))
);
