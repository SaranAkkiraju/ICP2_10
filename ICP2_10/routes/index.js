var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  var searchtext = req.query.searchtext;
  var url = "https://kgsearch.googleapis.com/v1/entities:search?query="+searchtext+"&key=AIzaSyCZbMz2VUDfsNIawl7W9W64FpZp8gsoh10&limit=1&indent=True";
  request.get(url).pipe(res);
});

module.exports = router;
