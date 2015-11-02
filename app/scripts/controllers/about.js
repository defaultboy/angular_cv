'use strict';

/**
 * @ngdoc function
 * @name angularCvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCvApp
 */
angular.module('angularCvApp')
  .controller('aboutCtrl', function ($scope, amazingCopy) {

    $scope.available = true;

    $scope.thePerson = amazingCopy.personA;

    $scope.skills = [
       {
       	 title: 'HTML',
       	 showDescription: true,
       	 description: 'HyperText Markup Language',
       	 percentage: 95
       },
       {
         title: 'CSS',
       	 showDescription: true,
       	 description: 'Cascading Style Sheets',
       	 percentage: 95
       },
       {
         title: 'JS',
       	 showDescription: true,
       	 description: 'JavaScript',
       	 percentage: 80
       },
       {
         title: 'AngularJS',
         showDescription: true,
         description: 'JavaScript MVW Framework',
         percentage: 60
       }
    ];

  });