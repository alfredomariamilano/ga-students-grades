// (function() {
//   'use strict';
//

angular
  .module('gaGradesApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html',
    controller: 'HomeCtrl as home'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl as users'
  })
  .state('cohortsIndex', {
    url: '/cohorts',
    templateUrl: '/js/views/cohorts/index.html',
    controller: 'CohortsIndexCtrl as cohorts'
  })
  .state('cohortsShow', {
    url: '/cohorts/:id',
    templateUrl: '/js/views/cohorts/show.html',
    controller: 'CohortsShowCtrl as cohorts'
  })
  .state('gradesShow', {
    url: '/grades/:id',
    templateUrl: '/js/views/grades/show.html',
    controller: 'GradesShowCtrl as grades'
  })
  .state('marksNew', {
    url: '/grades/:id/new-mark',
    templateUrl: '/js/views/marks/new.html',
    controller: 'MarksNewCtrl as marks'
  });

  $urlRouterProvider.otherwise('/');
}
//
//   return this.config(Router);
// }).call(app);
