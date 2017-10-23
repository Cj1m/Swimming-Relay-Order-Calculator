var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('results', { domain: 'SROC - ', title: 'Results', layout: 'layout.hbs' });
});

module.exports = router;
