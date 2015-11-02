'use strict';

angular.module('angularCvApp').directive('skillBar', function(){

  return {
    restrict: 'EA',
    templateUrl: 'views/partials/skill-bar.html',
    scope: {
      percentage: '@'
    },
  };

});