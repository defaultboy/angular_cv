'use strict';

/**
 * @ngdoc overview
 * @name angularCvApp
 * @description
 * # angularCvApp
 *
 * Main module of the application.
 */
angular
  .module('angularCvApp', [
    'ngRoute',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'views/landing.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html',
      controller: 'projectsCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    });


  });
