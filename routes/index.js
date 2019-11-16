var express = require('express');
var router = express.Router();

const images = require('../data/images');

router.get('/', function(req, res, next) {
  res.render('index', { images });
});

router.post('/post-images', (req, res, next) => {
  res.json(req.body);
});

module.exports = router;
