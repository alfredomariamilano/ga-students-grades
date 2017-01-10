angular
.module('gaGradesApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Grade', '$scope'];
function UsersShowCtrl(User, $stateParams, Grade, $scope){
  const vm = this;
  User.get($stateParams, data => {

    vm.user = data;
    for (var i = vm.user.grades.length-1; i >= 0; i--) {
      vm.user.grades[i].ticked = false;
      Grade.get({id: vm.user.grades[i].id}, data => {
        console.log(data);
        var holdHere = i
        const grade = data;
        for (var j = 0; j < grade.marks.length; j++) {
          if ($scope.$parent.user.id === grade.marks[j].instructor.id){
            // vm.user.grades[holdHere].ticked = true;
          }
        }
      });
    }
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
