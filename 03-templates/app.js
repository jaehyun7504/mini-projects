const express = require('express');
const bodyParser = require('body-parser');

const nameFormRoutes = require('./routes/nameForm');
const nameListRoutes = require('./routes/nameList');

const port = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', nameListRoutes.router);
app.use('/', nameFormRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
