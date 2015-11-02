'use strict';

angular.module('angularCvApp').factory('globalCopy', function(){

  var person = {
    name: 'Joe Bloggs',
    available: true
  };

  return person;

});