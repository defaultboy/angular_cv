'use strict';

angular.module('angularApp').factory('amazingCopy', function(){

  var copy = {
  	personA: 'Marek',
  	personB: 'Mike',
  	personC: 'Tony'
  };

  return copy;

});