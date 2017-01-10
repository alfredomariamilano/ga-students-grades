angular
.module('gaGradesApp')
.factory('Mark', markFactory);

markFactory.$inject =['API', '$resource'];
function markFactory(API, $resource){
  return $resource(`${API}/marks/:id`, { id: '@_id'}, {
    'query':      { method: 'GET', isArray: true }
  });
}
