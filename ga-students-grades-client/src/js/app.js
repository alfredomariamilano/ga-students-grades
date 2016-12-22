const app = (function() {
  'use strict';

  const dependencies = [
    'ui.router',
    'ngResource',
    'angular-jwt',
    'ng-token-auth'
  ];
  return angular.module('gaGradesApp', dependencies);

})();

console.log('hello there');
