
  'use strict'

  angular
    .module('formsGeneratorApp')
    .config(mainConfig);

  mainConfig.$inject = ["$stateProvider"];
  function mainConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main/main.view.html",
        controller: "MainCtrl"
      })
  }


