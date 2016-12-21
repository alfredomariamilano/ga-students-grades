console.log('blooop');

angular
.module('gaGradesApp', [
  'ui.router',
  'ngResource',
  'angular-jwt'
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
  console.log(data);
});

$.ajax({
  url: 'http://localhost:3000/users',
  method: 'GET'
}).done(data => {
  console.log(data);
});
