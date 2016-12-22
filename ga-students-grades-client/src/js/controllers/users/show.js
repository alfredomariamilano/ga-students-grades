angular
  .module('gaGradesApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;
  User.get($stateParams, data => {
    console.log(data);
    vm.user = data;
  });
  // $http
  // .get('http://localhost:3000/users')
  // .then(data => {
  //   console.log('Success:', data);
  //   vm.cohorts = data.data;
  // }, data => {
  //   console.log('Failure:', data);
  // });


}
