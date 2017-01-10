angular
  .module('gaGradesApp')
  .controller('MarksNewCtrl', MarksNewCtrl);

MarksNewCtrl.$inject = ['$stateParams', 'Grade', 'Mark', '$scope', '$state'];
function MarksNewCtrl($stateParams, Grade, Mark, $scope, $state){
  const vm = this;
  Grade.get($stateParams, data => {
    console.log('HERE', data);
    vm.grade = data;
  });
  vm.submit = function(){
    vm.mark.grade_id = parseInt($stateParams.id);
    vm.mark.classwork_effort = parseInt(vm.mark.classwork_effort);
    vm.mark.homework_effort = parseInt(vm.mark.homework_effort);
    console.log(vm.mark);
    Mark
    .save({ mark: vm.mark })
    .$promise
    .then(data => {
      console.log(data);
      $state.go('gradesShow', {'id': $stateParams.id});
    });
  };
}
