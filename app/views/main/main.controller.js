/**
 * Created by shavit on 12/13/14.
 */
  'use strict'

  angular
    .module('formsGeneratorApp')
    .controller('MainCtrl', mainCtrl);

  mainCtrl.$inject = ["$scope"];
  function mainCtrl($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }


