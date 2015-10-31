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

exports['default'] = Dic;
module.exports = exports['default'];
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3l1a2kvZGV2L3VvYXBlcHBlci9UZWFtR1RQL3BlcHBlciAyL2h0bWwvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUveXVraS9kZXYvdW9hcGVwcGVyL1RlYW1HVFAvcGVwcGVyIDIvaHRtbC9zcmMvanMvZmFrZV80NjZjYzhhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBEaWMgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEaWMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpYyk7XG5cbiAgICB0aGlzLnJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly90ZWFtZ3B0LmZpcmViYXNlaW8uY29tJyk7XG4gICAgdGhpcy5jb2x1bW5OYW1lcyA9IHtcbiAgICAgIGFpenU6ICdBaXp1JyxcbiAgICAgIHRva3lvOiAnVG9reW8nXG4gICAgfTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEaWMsIFt7XG4gICAga2V5OiAnZ2V0T3Bwb3NpdGVDb2x1bW5OYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3Bwb3NpdGVDb2x1bW5OYW1lKGNvbHVtbk5hbWUpIHtcbiAgICAgIHJldHVybiBjb2x1bW5OYW1lID09IHRoaXMuY29sdW1uTmFtZXMuYWl6dSA/IHRoaXMuY29sdW1uTmFtZXMudG9reW8gOiB0aGlzLmNvbHVtbk5hbWVzLmFpenU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWxsQWl6dUxpc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxBaXp1TGlzdCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIF90aGlzLnJlZi5vbigndmFsdWUnLCBmdW5jdGlvbiAoc25hcHNob3QpIHtcbiAgICAgICAgICByZXNvbHZlKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChkaWNzKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkaWNzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBkaWNzW2tleV1bX3RoaXMuY29sdW1uTmFtZXMuYWl6dV07XG4gICAgICAgIH0pO1xuICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQnknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0J5KGRpc3RDb2x1bW5OYW1lLCBvcmlnaW5hbFdvcmQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZFxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMyLnJlZi5vcmRlckJ5Q2hpbGQoZGlzdENvbHVtbk5hbWUpLmVxdWFsVG8odG9reW8pLm9uKCd2YWx1ZScsIGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuICAgICAgICAgIHJlc29sdmUoc25hcHNob3QudmFsKCkpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRpY3MpIHtcbiAgICAgICAgcmV0dXJuIGRpY3MgPT0gbnVsbCA/IG51bGwgOiBkaWNzW09iamVjdC5rZXlzKGRpY3MpWzBdXVtnZXRPcHBvc2l0ZUNvbHVtbk5hbWUoZGlzdENvbHVtbk5hbWUpXTtcbiAgICAgIH0pWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0FpenUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FpenUodG9reW8pIHtcbiAgICAgIHJldHVybiB0b0J5KHRoaXMuY29sdW1uTmFtZXMuYWl6dSwgdG9reW8pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvVG9reW8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1Rva3lvKGFpenUpIHtcbiAgICAgIHJldHVybiB0b0J5KHRoaXMuY29sdW1uTmFtZXMudG9reW8sIGFpenUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEaWM7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEaWM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiXX0=
