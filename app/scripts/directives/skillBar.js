'use strict';

angular.module('angularCvApp').directive('skillBar', function(){

  return {
    restrict: 'EA',
    templateUrl: 'views/partials/directives/skill-bar.html',
    scope: {
      percentage: '@'
    },
  };

});