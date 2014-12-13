/**
 * Created by shavit on 12/13/14.
 */
angular.module("formsGeneratorApp")
.config(["$stateProvider",function($stateProvider){
    $stateProvider
      .state('form',{
        url:"/form",
        templateUrl:"appComponents/form/form.view.html",
        controller:"formCtrl"
      })
  }])
