(function() {
  ons.bootstrap();
  var documentReadyPromise = new Promise(function(resolve, reject) {
    ons.ready(function() {
      resolve();
    });
  });
  var currentFuncName = 'loading';
  var Dic = function() {
    var ref = new Firebase('https://teamgpt.firebaseio.com');
    console.log(ref);
    return {
      allAizuList: function() {
        return new Promise(function(resolve, reject) {
          ref.on('value', function(snapshot) {
            resolve(snapshot.val());
          }, function(error) {
            reject(error);
          });
        }).then(function(dics) {
          return Object.keys(dics).map(function(key) {
            return dics[key]['Aizu'];
          });
        }).catch(function(error) {
          console.log(error);
        });
      },
      toAizu: function(tokyo) {
        return new Promise(function(resolve, reject) {
          ref.orderByChild('Aizu').equalTo(tokyo).on('value', function(snapshot) {
            resolve(snapshot.val());
          }, function(error) {
            reject(error);
          });
        }).then(function(dics) {
          return (dics == null ? null : dics[Object.keys(dics)[0]]['Tokyo']);
        }).catch(function(error) {
          console.log(error);
        });
      },
      toTokyo: function(aizu) {
        return new Promise(function(resolve, reject) {
          ref.orderByChild('Tokyo').equalTo(aizu).on('value', function(snapshot) {
            resolve(snapshot.val());
          }, function(error) {
            reject(error);
          });
        }).then(function(dics) {
          return (dics == null ? null : dics[Object.keys(dics)[0]]['Aizu']);
        }).catch(function(error) {
          console.log(error);
        });
      },
      toPair: function(one) {
        var self = this;
        return Promise.all([this.toAizu(one), this.toTokyo(one)]).then(function(results) {
          return (results[0] == null ? results[1] : results[0]);
        }).catch(function(error) {
          console.log(error);
        });
      },
      addNewEntry: function(obj) {
      }
    };
  };
  var dic = Dic();
  window.dic = dic;
  var allAizuListReadyPromise = dic.allAizuList();
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
        // TODO: organize variable meanings!
        // this code is apply on only translate "aizu -> tokyo"
        dic.toPair(saidStr).then(function(tokyo) {
          ALMemory.raiseEvent('myapp/pullfound', {
            tokyo: tokyo,
          });
          console.log(entry);
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
})();
