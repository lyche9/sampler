var express = require('express');
var router = express.Router();

var google = require('googleapis');
var youtube = google.youtube('v3');

var API_KEY = require("../key.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sampler' });
});

/*POST to index*/
router.post('/', function(req, res) {

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
        var video = {
          "id" :        "",
          "title":      "",
          "thumbnail":  {},
        };
        video.id = response.items[i].id.videoId;
        video.title = response.items[i].snippet.title;
        video.thumbnail = response.items[i].snippet.thumbnails;
        videos.push(video);
      }

      res.send(videos);
    }
  });
});


module.exports = router;
