angular
.module('gaGradesApp')
.controller('CohortsShowCtrl', CohortsShowCtrl);


CohortsShowCtrl.$inject = ['$http', '$stateParams', '$scope'];
function CohortsShowCtrl($http, $stateParams, $scope){
  console.log('JAJAJSJ', $scope.$parent.user);
  const vm = this;
  $http
  .get(`http://localhost:3000/cohorts/${$stateParams.id}`)
  .then(data => {
    console.log('Success:', data);
    vm.cohort = data.data;
  }, data => {
    console.log('Failure:', data);
  });

}
