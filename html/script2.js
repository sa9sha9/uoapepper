(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Dic = (function () {
  function Dic() {
    _classCallCheck(this, Dic);

    this.ref = new Firebase('https://teamgpt.firebaseio.com');
    this.columnNames = {
      aizu: 'Aizu',
      tokyo: 'Tokyo'
    };
  }

  _createClass(Dic, [{
    key: 'getOppositeColumnName',
    value: function getOppositeColumnName(columnName) {
      return columnName == this.columnNames.aizu ? this.columnNames.tokyo : this.columnNames.aizu;
    }
  }, {
    key: 'getAllAizuList',
    value: function getAllAizuList() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.ref.on('value', function (snapshot) {
          resolve(snapshot.val());
        }, function (error) {
          reject(error);
        });
      }).then(function (dics) {
        return Object.keys(dics).map(function (key) {
          return dics[key][_this.columnNames.aizu];
        });
      })['catch'](function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'toBy',
    value: function toBy(distColumnName, originalWord) {
      var _this2 = this;

      // private method
      return new Promise(function (resolve, reject) {
        _this2.ref.orderByChild(distColumnName).equalTo(tokyo).on('value', function (snapshot) {
          resolve(snapshot.val());
        }, function (error) {
          reject(error);
        });
      }).then(function (dics) {
        return dics == null ? null : dics[Object.keys(dics)[0]][getOppositeColumnName(distColumnName)];
      })['catch'](function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'toAizu',
    value: function toAizu(tokyo) {
      return toBy(this.columnNames.aizu, tokyo);
    }
  }, {
    key: 'toTokyo',
    value: function toTokyo(aizu) {
      return toBy(this.columnNames.tokyo, aizu);
    }
  }]);

  return Dic;
})();

exports.Dic = Dic;
},{}]},{},[1])