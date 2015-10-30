'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngRoute',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html'
    });


  });
