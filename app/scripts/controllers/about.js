'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('aboutCtrl', function ($scope, amazingCopy, $http) {


  	$http.get('api/mything').then(function (data){
       $scope.myNewData = data;
  	}, function (err){
       console.log('omg, error!', err);
 	});

  	$scope.thePerson = amazingCopy.personA;

    $scope.bingo = 'hey guys';
    $scope.someText = 'music!';

    $scope.marek = true;

    $scope.skills = [
       {
       	 title: 'HTML',
       	 proudOfIt: true,
       	 somethingElse: 'I really like it.',
       	 percentage: '90%'
       },
       {
         title: 'CSS',
       	 proudOfIt: false,
       	 somethingElse: 'its amazing',
       	 percentage: '85%'
       },
       {
         title: 'javascript',
       	 proudOfIt: true,
       	 somethingElse: 'Not bad.',
       	 percentage: '80%'
       }
    ];

    $scope.programs = [
	      {
	      	title: 'bla'
	      },
	      {
	      	title: 'bingo'
	      }

    ];

  });