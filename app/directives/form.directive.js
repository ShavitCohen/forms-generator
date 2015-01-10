/**
 * Created by shavit on 12/13/14.
 */
angular
  .module("formsGeneratorApp")
  .directive("formBuilder",formBuilder);

formBuilder.$inject = [];
function formBuilder(){
  var directive = {
    scope:{
      formData: "="
    },
    link: link,
    templateUrl: 'directives/form.directive.html',
    restrict: 'E'
  };
  return directive;

  function link(scope, element, attrs) {
    scope.runScript = function(scriptExpression){
      console.log(scriptExpression);
    };
  }
}
