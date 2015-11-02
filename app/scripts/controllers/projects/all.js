'use strict';

/**
 * @ngdoc function
 * @name angularCvApp.controller:projectsAllCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCvApp
 */
angular.module('angularCvApp')
  .controller('projectsAllCtrl', function ($scope) {


    //try replacing this with a $http GET to a JSON file.
    //example here: https://docs.angularjs.org/tutorial/step_08
    //ignore the 'routeParams' in the tutorial. That is for individual views.
    //here we just want to iterate over all projects.
    $scope.projects = [
      {
        title: 'hello world',
        id: 1,
        imgUrl: 'http://siliconvalleyrealtyworld.com/files/2011/09/Crash_Test_Dummy.jpg'
      },
      {
        title: 'best app in the world',
        id: 2,
        imgUrl: 'http://buygapinsurance.co.uk/wp-content/uploads/2011/08/crash_test_dummy.jpg'
      },
      {
        title: 'something else',
        id: 3,
        imgUrl: 'https://keepitclever.com.au/wp-content/uploads/2014/05/20140506_RMIT_Dummies.jpg'
      },
      {
        title: 'just another app',
        id: 4,
        imgUrl: 'http://buygapinsurance.co.uk/wp-content/uploads/2011/08/crash_test_dummy.jpg'
      },
      {
        title: 'super amazing js',
        id: 5,
        imgUrl: 'https://keepitclever.com.au/wp-content/uploads/2014/05/20140506_RMIT_Dummies.jpg'
      },
      {
        title: 'something or rather',
        id: 6,
        imgUrl: 'http://siliconvalleyrealtyworld.com/files/2011/09/Crash_Test_Dummy.jpg'
      }

    ];

  });