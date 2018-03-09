var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');
/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query("SELECT * FROM tbl_movies, tbl_genre, tbl_mov_genre WHERE tbl_mov_genre.movies_id = tbl_movies.movies_id AND tbl_mov_genre.genre_id = tbl_genre.genre_id AND tbl_genre.genre_name = 'action'", (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render('kids', {
        layout:'kids',
        title: 'Roku',
        message : "Pick a video",
        movies: result,
      });
    }
  });
});

module.exports = router;
