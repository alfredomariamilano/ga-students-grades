angular
.module('gaGradesApp', [
  'ui.router',
  'ngResource',
  'angular-jwt',
  'ng-token-auth'
])
.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000',
    emailSignInPath: '/auth/sign_in',
    storage: 'localStorage'
  });
});

angular
.module('gaGradesApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$auth', '$rootScope'];

function MainCtrl($auth, $rootScope) {
  const vm = this;
  console.log('fuck');
  vm.user = {
    'email': 'alex@alex.com',
    'password': 'password'
  };
  $auth.submitLogin({
    email: vm.user.email,
    password: vm.user.password
  }).then(function(resp) {
    $rootScope.$on('auth:login-success', function(ev, user) {
      alert('Welcome ', user.email);
    });
  })
  .catch(function(resp) {
    $rootScope.$on('auth:login-error', function(ev, reason) {
      alert('auth failed because', reason.errors[0]);
    });
  });
}





// var token;
// var alex;
// var expiry;
// var uid;
//
// $.ajax({
//   url: 'http://localhost:3000/auth/sign_in',
//   method: 'POST',
//   data: user
// }).done((data, textStatus, xhr) => {
//   alex = data.data;
//   uid = alex.uid;
//   console.log('alex', alex);
//   console.log('token', xhr.getAllResponseHeaders());
//   token = xhr.getResponseHeader('access-token');
//   expiry = xhr.getResponseHeader('expiry');
//   console.log('textstatus???', textStatus);
//
//   $.ajax({
//     url: 'http://localhost:3000/cohorts',
//     method: 'GET',
//     headers: {
//       'access-token': token,
//       'token-type': 'Bearer',
//       'client': 'default',
//       'expiry': parseInt(expiry),
//       'uid': uid
//     }
//   }).done(data => {
//     console.log('cohorts', data);
//   });
// });
//
// $.ajax({
//   url: 'http://localhost:3000/users',
//   method: 'GET'
// }).done(data => {
//   console.log(data);
// });
