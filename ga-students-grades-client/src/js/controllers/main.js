(function() {
  'use strict';

  MainCtrl.$inject = ['$http'];
  function MainCtrl($http){
    $http
    .post('http://localhost:3000/auth/sign_in', {
      'email': 'alex@alex.com',
      'password': 'password'
    }).then(function successCallback(response) {
      console.log('Success', response);
    }, function errorCallback(response) {
      console.log('Failure',response);
    });
  }

  return this.controller('MainCtrl', MainCtrl);
}).call(app);
