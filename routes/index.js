var express = require('express');
var router = express.Router();

var google = require('googleapis');
var youtube = google.youtube('v3');

var API_KEY = require("../key.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*POST to index*/
router.post('/', function(req, res) {

  console.log(req.body);

  /*Make API call*/
  var params = {
    key:        API_KEY.key,
    part:       "snippet",
    q:          req.body.q,
    type:       "video",
    maxResults: 5
  };


  youtube.search.list(params, function(err, response) {
    if (err) {
      console.log(err);
    }
    else {
      var videos = [];
      for (var i in response.items) {
        videos.push(response.items[i].id.videoId);
      }
      res.send(videos);
    }
  });
});


module.exports = router;
