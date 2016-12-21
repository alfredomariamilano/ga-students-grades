console.log('blooop');

angular
.module('gaGradesApp', [
  'ui.router',
  'ngResource',
  'angular-jwt',
  'ng-token-auth'
]);

var user = {
  'email': 'alex@alex.com',
  'password': 'password'
};

$.ajax({
  url: 'http://localhost:3000/auth/sign_in',
  method: 'POST',
  data: user
}).done(data => {
  console.log('login', data);
});

$.ajax({
  url: 'http://localhost:3000/users',
  method: 'GET'
}).done(data => {
  console.log('users index', data);
});

$.ajax({
  url: 'http://localhost:3000/users/1',
  method: 'GET'
}).done(data => {
  console.log('users show', data);
});
