'use strict';

/**
 * @ngdoc function
 * @name InternationalizationModule.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the InternationalizationModule
 */
angular.module('InternationalizationModule')
  .controller('MainCtrl', function ($scope, $translate, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.locale = $translate.use(); // ON INIT

    $rootScope.$on('$translateChangeSuccess', function (event, data) {// ON LANGUAGE CHANGED
      $scope.locale = data.language;
    });
  });
