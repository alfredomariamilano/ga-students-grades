angular
.module('gaGradesApp')
.factory('Grade', gradeFactory);

gradeFactory.$inject =['API', '$resource'];
function gradeFactory(API, $resource){
  return $resource(`${API}/grades/:id`, { id: '@_id'}, {
    'query':      { method: 'GET', isArray: true }
  });
}
