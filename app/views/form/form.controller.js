/**
 * Created by shavit on 12/13/14.
 */

  'use strict';

  angular
    .module("formsGeneratorApp")
    .controller("formCtrl", formCtrl);

  formCtrl.$inject = ["$scope", "$http"];
  function formCtrl($scope, $http) {
    $http.get("json/groupSettings.json")
      .success(function (data, status, headers, config) {
        $scope.formData = data;
      });
  }


