var app = angular.module('JobApp', ['ui.router', 'JobCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$httpProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/404');

    $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/job.html',
    controller: 'HomeCtrl'
  })
  .state('newJob', {
    url: '/job/new',
    templateUrl: 'app/views/newJob.html',
    controller: 'NewCtrl'
  })
  .state('showJob', {
    url: '/job/:id',
    templateUrl: 'app/views/showJob.html',
    controller: 'ShowCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/userSignup.html',
    controller: 'SignupCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/userLogin.html',
    controller: 'LoginCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  });

    $locationProvider.html5Mode(true);
  }]);
