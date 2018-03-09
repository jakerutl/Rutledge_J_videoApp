var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();


router.get('/:id',(req, res) => {
	console.log(req.params.id);
	console.log('hit an api route with params');

	connect.query(`SELECT * FROM tbl_movies WHERE movies_trailer="${req.params.id}"`, (err, result) => {
		if (err) {
			throw err; console.log(err);
		} else {
      // console.log (result);
      res.render('details',{
        trailers : result[0]
			});
		}
	});
});

module.exports = router;
