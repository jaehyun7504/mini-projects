const express = require('express');

const nameListRoutes = require('./nameList');

const router = express.Router();

const names = [];

router.get('/', (req, res) => {
  res.render('nameList', {
    pageTitle: 'Users',
    names: nameListRoutes.names,
  });
});

router.post('/', (req, res) => {
  names.push(req.body.name);
  res.redirect('/');
});

exports.router = router;
exports.names = names;
