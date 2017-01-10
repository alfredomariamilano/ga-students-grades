angular
.module('gaGradesApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Grade', '$scope'];
function UsersShowCtrl(User, $stateParams, Grade, $scope){
  const vm = this;
  User.get($stateParams, data => {

    vm.user = data;
    vm.user.grades.forEach(function(grade){
      grade.ticked = false;
      Grade.get({id: grade.id}, data => {
        for (var j = 0; j < data.marks.length; j++) {
          console.log($scope.$parent.user.id, data.marks[j]);
          if ($scope.$parent.user.id === data.marks[j].instructor.id){
            grade.ticked = true;
          }
        }
      });
    });
  });
}
// $http
// .get('http://localhost:3000/users')
// .then(data => {
//   console.log('Success:', data);
//   vm.cohorts = data.data;
// }, data => {
//   console.log('Failure:', data);
// });
