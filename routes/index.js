var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { domain: 'SROC|Home', title: 'Home', layout: 'layout.hbs' });
});

module.exports = router;
