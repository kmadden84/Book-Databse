var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/books/page/1")
});
router.get('/new', function (req, res, next) {
  res.redirect("books/new");
});

module.exports = router;
