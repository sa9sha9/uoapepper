(function() {
  var appKey = '7e5a3a3b417737d5cd3a81a2b1be311e60ceff372f3fa8c39b26361457ce8336';
  var clientKey = 'e4e1d27d0db94d4aac54b356e074370549a1fcbb8594e98609b6b1f33369fe40';
  NCMB.initialize(appKey, clientKey);
})();
(function() {
  ons.bootstrap();
  // var module = ons.bootstrap(document.body, ['onsen']);
  // var documentReadyPromise = new Promise(function(resolve, reject) {
  //   if(document.readyState == 'complete') {
  //     resolve();
  //   } else {
  //     document.addEventListener('load', function() {
  //       resolve();
  //     });
  //   }
  // });
  var documentReadyPromise = new Promise(function(resolve, reject) {
    ons.ready(function() {
      resolve();
    });
  });
  var currentFuncName = 'loading';
  var Dic = function() {
    var DicClass = NCMB.Object.extend('dictionaryClass');
    var dicClassOperator = new DicClass;
    return {
      allAizuList: function() {
        return new Promise(function(resolve, reject) {
          var query = new NCMB.Query(DicClass);
          query.find({
            success: function(dics){
              var result = [];
              for(var i = 0; i < dics.length; i++) {
                result.push(dics[i].get('Aizu'));
              }
              resolve(result);
            },
            error: function() {
              reject();
            }
          });
        });
      },
      toAizu: function(tokyo) {
        return new Promise(function(resolve, reject) {
          var query = new NCMB.Query(DicClass);
          query.equalTo('Tokyo', tokyo);
          query.first({
            success: function(result) {
              resolve(first);
            },
            error: function() {
              reject();
            }
          });
        });
      },
      toTokyo: function(aizu) {
        return new Promise(function(resolve, reject) {
          var query = new NCMB.Query(DicClass);
          query.equalTo('Aizu', aizu);
          query.first({
            success: function(result) {
              resolve(first);
            },
            error: function() {
              reject();
            }
          });
        });
      },
      toPair: function(one) {
        return new Promise(function(resolve, reject) {
          var queryGetTokyo = new NCMB.Query(DicClass);
          queryGetTokyo.equalTo('Aizu', one);
          var queryGetAizu = new NCMB.Query(DicClass);
          queryGetAizu.equalTo('Tokyo', one);
          var query = NCMB.Query.or(queryGetAizu, queryGetTokyo);
          query.first({
            success: function(result) {
              resolve(result);
            },
            error: function() {
              reject();
            }
          });
        });
      },
      addNewEntry: function(obj) {
        return new Promise(function(resolve, reject) {
          (new DicClass()).save({
            Tokyo: obj.tokyo,
            Aizu: obj.aizu
          }, {
            success: function(dic) {
              resolve();
            },
            error: function(dic, error) {
              reject();
            }
          });
        });
      }
    };
  };
  var dic = Dic();
  window.dic = dic;
  var allAizuListReadyPromise = dic.allAizuList();
  // dicReadyPromise.then(function(result) {
  //   console.log(result);
  // });
  var ALMemoryReadyPromise = new Promise(function(resolve, reject) {
    if(window.QiSession == undefined) {
      reject();
    } else {
      var qisession = new QiSession();
      qisession.service('ALMemory').done(function(ALMemory) {
        resolve(ALMemory);
      });
    }
  });
  // PULL
  Promise.all([ALMemoryReadyPromise, allAizuListReadyPromise]).then(function(solvers) {
    var ALMemory = solvers[0];
    var allAizuList = solvers[1];
    ALMemory.raiseEvent('myapp/dic', allAizuList); //Changed Event Name!!
  });
  ALMemoryReadyPromise.then(function(ALMemory) {
    ALMemory.subscriber('myapp/pullheard').done(function(subscriber) {
      subscriber.signal.connect(function(saidStr) {
        dic.toPair(saidStr).then(function(entry) {
          ALMemory.raiseEvent('myapp/pullfound', {
            tokyo: entry.get('Tokyo'),
            aizu: entry.get('Aizu')
          });
          document.querySelector('.result').innerText = (
              (saidStr == entry.get('Tokyo')) ? entry.get('Aizu') : entry.get('Tokyo')
          );
        });
      });
    });
  });
  // PUSH
  ALMemoryReadyPromise.then(function(ALMemory) {
    ALMemory.subscriber('myapp/heard').done(function(subscriber) {
      subscriber.signal.connect(function(saidObj) {
        dic.addNewEntry(saidObj);
      });
    });
  });
  // documentReadyPromise.then(function() {
  //   baseNav.pushPage('menu.html');
  // });
  window.changeFunc = function(funcName) {
    if(currentFuncName != funcName) {
      documentReadyPromise.then(function() {
        baseNav.pushPage(funcName, {animation: 'slide'});
        currentFuncName = funcName;
      });
      ALMemoryReadyPromise.then(function(ALMemory) {
        ALMemory.raiseEvent('myapp/func', funcName);
      });
    }
  };
  // var module = angular.module('atApp', []);
  // module.controller('editIntonationController', function() {
  //   documentReadyPromise.then(function() {
  //     var editIntonation = this;
  //     editIntonation.aizuChars = ['a', 'b', 'c'];
  //   });
  // });
})();
