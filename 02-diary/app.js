const express = require('express');
const dotenv = require('dotenv');

const foodRoutes = require('./routes/foodRoutes');

dotenv.config('./config.env');

const port = process.env.PORT || 5000;

const app = express();

app.use('/api', foodRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
