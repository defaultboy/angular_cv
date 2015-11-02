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
      templateUrl: 'views/projects/projects.html',
    })
    .state('projects.all', {
      url: '/all',
      templateUrl: 'views/projects/all.html',
      controller: 'projectsAllCtrl'
    })
    .state('projects.individual', {
      url: '/:id',
      templateUrl: 'views/projects/individual.html',
      controller: 'projectIndividualCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    });

  });
