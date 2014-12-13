/**
 * Created by shavit on 12/13/14.
 */

  'use strict'
angular
  .module("formsGeneratorApp")
  .config(formRoute);

  formRoute.$inject = ["$stateProvider"];
  function formRoute($stateProvider){
    $stateProvider
      .state('form',{
        url:"/form",
        templateUrl:"views/form/form.view.html",
        controller:"formCtrl"
      })
  }


