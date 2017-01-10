// (function() {
//   'use strict';

angular
  .module('gaGradesApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http'];
function MainCtrl($http){
  const vm = this;
  $http
  .post('http://localhost:3000/auth/sign_in', {
    'email': 'alfredo@alfredo.com',
    'password': 'password'
  }).then(function successCallback(response) {
    console.log('Success', response);
    vm.user = response;
  }, function errorCallback(response) {
    console.log('Failure',response);
  });
  // vm.logout = logout;
  // function logout(){
  //   vm.user = null;
  // }
}

//   return this.controller('MainCtrl', MainCtrl);
// }).call(app);
