/**
 * Created by shavit on 12/13/14.
 */
angular
  .module("formsGeneratorApp")
  .directive("formBuilder",formBuilder);

formBuilder.$inject = ["formDataService","permissionsHandler"];
function formBuilder(formDataService, permissionsHandler){
  return {
    scope:{
      formData: "="
    },
    link: function (scope, element, attrs) {
      scope.runScript = function(scriptExpression){
        //No logic
      };
      scope.permissionsHandler = permissionsHandler;
      scope.formDataService = formDataService;

      scope.$watch("formData",function(newVal){
        if(scope.formData && !scope.formData.permissionsChecked){
          permissionsHandler.setPermissionForNestedObject(scope.formData, ["formSections.formRows.fields","formSections.formRows.fields.items"]);
        }
      },true);

      scope.getItems = function(field){
        if(field.genItems){
          field.items = formDataService.selectValues[field.genItems];
        }
      }



    },
    templateUrl: 'directives/form.directive.html',
    restrict: 'E'
  };
}
