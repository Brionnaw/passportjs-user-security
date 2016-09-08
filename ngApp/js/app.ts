'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: app.Controllers.RegisterController,
      controllerAs: 'vm'
    }).state('Login', {
      url: '/',
      templateUrl: '/templates/login.html',
      controller: app.Controllers.LoginController,
      controllerAs: 'vm'
    }).state('Home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
