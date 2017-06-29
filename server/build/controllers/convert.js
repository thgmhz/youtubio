'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stream = require('../helpers/stream');

exports.default = function (req, res) {
  var id = req.params.youtubeId;
  var url = 'https://www.youtube.com/watch?v=' + id;

  function sendResponse(file) {
    res.download(file);
  }

  (0, _stream.getVideoInfo)(id).then(_stream.setFileName).then(function (filename) {
    return (0, _stream.createAudioFile)(url, filename);
  }).then(sendResponse).catch(console.log);
};