(function() {
  'use strict';

  HomeCtrl.$inject = [];
  function HomeCtrl(){
    console.log('Home');
  }
  return this.controller('HomeCtrl', HomeCtrl);

}).call(app);
