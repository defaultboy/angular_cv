'use strict';

/**
 * @ngdoc function
 * @name angularCvApp.controller:headerCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCvApp
 */
angular.module('angularCvApp')
  .controller('headerCtrl', function ($scope, globalCopy) {

    $scope.globalCopy = globalCopy;

  });