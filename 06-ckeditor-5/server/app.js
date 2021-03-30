const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/simple-upload', (req, res, next) => {
  console.log({ req });
  next();
});

app.listen(8080, () => console.log(`Listening on port 8080...`));
