/**
 * Created by shavit on 12/13/14.
 */
  'use strict'

  angular
    .module('formsGeneratorApp')
    .controller('MainCtrl', mainCtrl);

  mainCtrl.$inject = ["$scope", "$http"];
  function mainCtrl($scope,$http) {
    $http.get("json/groupSettings.json")
      .success(function (data, status, headers, config) {
        $scope.formData = data;
      });
  }


