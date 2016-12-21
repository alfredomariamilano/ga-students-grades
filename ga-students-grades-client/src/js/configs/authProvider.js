angular.module('gaGradesApp')
  .config(authProvider);

authProvider.$inject = ['$authProvider'];
function authProvider($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });
}
