angular
  .module('gaGradesApp')
  .controller('GradesShowCtrl', GradesShowCtrl);

GradesShowCtrl.$inject = ['Grade', '$stateParams'];
function GradesShowCtrl(Grade, $stateParams){
  const vm = this;
  Grade.get($stateParams, data => {
    console.log(data);
    vm.grade = data;
  });

}
