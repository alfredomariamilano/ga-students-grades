(function() {
  'use strict';

  CohortsIndexCtrl.$inject = ['$http'];
  function CohortsIndexCtrl($http){
    const vm = this;

    $http
      .get('http://localhost:3000/cohorts')
      .then(data => {
        console.log('Success:', data);
        vm.cohorts = data.data;
      }, data => {
        console.log('Failure:', data);
      });

  }

  return this.controller('CohortsIndexCtrl', CohortsIndexCtrl);
}).call(app);
