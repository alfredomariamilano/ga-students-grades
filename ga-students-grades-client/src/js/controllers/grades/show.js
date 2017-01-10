angular
  .module('gaGradesApp')
  .controller('GradesShowCtrl', GradesShowCtrl);

GradesShowCtrl.$inject = ['Grade', '$stateParams', '$scope'];
function GradesShowCtrl(Grade, $stateParams, $scope){
  const vm = this;
  Grade.get($stateParams, data => {
    console.log(data);
    vm.grade = data;
    vm.canSubmit = canSubmit;
    function canSubmit(){
      for (var i = 0; i < vm.grade.marks.length; i++) {
        if (vm.grade.marks[i].instructor.first_name === $scope.$parent.user.first_name && vm.grade.marks[i].instructor.last_name === $scope.$parent.user.last_name){
          return false;
        }
      }
      return true;
    }
  });

}
