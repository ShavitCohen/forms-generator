/**
 * Created by shavit on 12/13/14.
 */
angular
  .module("formsGeneratorApp")
  .directive("formBuilder",formBuilder);

formBuilder.$inject = ["formDataService"];
function formBuilder(formDataService){
  return {
    scope:{
      formData: "="
    },
    link: function (scope, element, attrs) {
      scope.runScript = function(scriptExpression){
        //No logic
      };
      scope.formDataService = formDataService;
    },
    templateUrl: 'directives/form.directive.html',
    restrict: 'E'
  };
}
