'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAudioFile = exports.setFileName = exports.getVideoInfo = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ytdlCore = require('ytdl-core');

var _ytdlCore2 = _interopRequireDefault(_ytdlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVideoInfo = exports.getVideoInfo = function getVideoInfo(id) {
  return new Promise(function (resolve, reject) {
    _ytdlCore2.default.getInfo(id, function (err, info) {
      if (err) reject(err);
      resolve(info);
    });
  });
};

var setFileName = exports.setFileName = function setFileName(info) {
  return Promise.resolve(_path2.default.join(__dirname, '../temp/' + info.title + '.mp3'));
};

var createAudioFile = exports.createAudioFile = function createAudioFile(url, filename) {
  return new Promise(function (resolve, reject) {
    (0, _ytdlCore2.default)('' + url, {
      filter: 'audioonly',
      quality: 'highest',
      downloadURL: true
    }).pipe(_fs2.default.createWriteStream(filename)).on('finish', function () {
      return resolve(filename);
    }).on('error', function () {
      return reject();
    });
  });
};