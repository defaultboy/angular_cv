'use strict';

angular.module('angularApp').directive('skillBar', function(){

  return {
    restrict: 'EA',
    templateUrl: 'views/partials/skill-bar.html',
    scope: {
      percentage: '@'
    },
  };

});