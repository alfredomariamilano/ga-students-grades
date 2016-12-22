(function() {
  'use strict';

  Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function Router($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html',
      controller: 'HomeCtrl as home'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/js/views/users/index.html',
      controller: 'UsersIndexCtrl as users'
    })
    .state('cohortsIndex', {
      url: '/cohorts',
      templateUrl: '/js/views/cohorts/index.html',
      controller: 'CohortsIndexCtrl as cohorts'
    });

    $urlRouterProvider.otherwise('/');
  }

  return this.config(Router);
}).call(app);
