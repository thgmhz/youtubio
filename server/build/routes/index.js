'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('../controllers');

exports.default = function (app) {
  app.route('/convert/:youtubeId').get(_controllers.convertController);
};