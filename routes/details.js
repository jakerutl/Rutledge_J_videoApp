var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

/* GET home page. */
router.get('/', function(req, res, next) {
  // let q = `SELECT * FROM tbl_movies`
  connect.query('SELECT * FROM tbl_movies', (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      // console.log(result);
      res.render('details', {
        layout:'details',
        title: 'Roku',
        movies: result,
      });

    }
  });
});

module.exports = router;
