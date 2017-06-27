(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var youtubio = {
  serverUrl: 'http://youtubio-server.herokuapp.com',

  init: function init() {
    chrome.runtime.sendMessage({ popupIsOpen: true });
    this.cacheSelectors();
    this.bindEvents();
  },
  cacheSelectors: function cacheSelectors() {
    this.body = document.getElementsByTagName('body')[0];
    this.link = document.createElement('a');
    this.link.id = 'youtubio-link';
    this.link.download = 'mp3';
  },
  bindEvents: function bindEvents() {
    chrome.runtime.onMessage.addListener(this.Events.onMessage);
  },
  Events: {
    onMessage: function onMessage(message, sender, sendResponse) {
      var self = youtubio;
      if (message.youtubeId) {
        self.link.href = self.serverUrl + '/convert/' + message.youtubeId;
        self.body.appendChild(self.link);
        setTimeout(function () {
          var youtubioLink = document.getElementById('youtubio-link');
          youtubioLink.click();
        }, 500);
      }
    }
  }
};

youtubio.init();

},{}]},{},[1]);
