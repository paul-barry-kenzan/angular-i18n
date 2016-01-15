'use strict';

/**
 * @ngdoc overview
 * @name InternationalizationModule
 * @description
 * # InternationalizationModule
 *
 * Main module of the application.
 */
angular
  .module('InternationalizationModule', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale'// angular-dynamic-locale
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('LOCALES', {
    'locales': {
      'ru_RU': 'Русский',
      'en_US': 'English'
    },
    'preferredLocale': 'en_US'
  });
