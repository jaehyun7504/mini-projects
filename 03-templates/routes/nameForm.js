const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('nameForm', {
    pageTitle: 'Home',
  });
});

module.exports = router;
