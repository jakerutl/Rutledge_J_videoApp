var express = require('express');
var router = express.Router();
var config = require('../config');

var toRender = (config.kidsmode) ? 'kids' : 'index';

/* GET home page. */
router.get('/', function(req, res, next) {
  // let q = `SELECT * FROM tbl_movies`
  res.render(toRender, {
    title: 'Roku',
    message : "Pick a video",
    mainpage : true,
    kidsmode : config.kidsmode
   });
});

module.exports = router;
