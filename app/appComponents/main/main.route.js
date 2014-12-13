'use strict';

/**
 * @ngdoc function
 * @name formsGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formsGeneratorApp
 */

angular.module('formsGeneratorApp')
  .config(["$stateProvider", function($stateProvider) {
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl:"appComponents/main/main.view.html",
      controller:"MainCtrl as main"
    })
}]);
