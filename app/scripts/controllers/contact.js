'use strict';

/**
 * @ngdoc function
 * @name angularCvApp.controller:contactCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCvApp
 */
angular.module('angularCvApp')
  .controller('contactCtrl', function ($scope, globalCopy) {

    $scope.email = globalCopy.email;

  });