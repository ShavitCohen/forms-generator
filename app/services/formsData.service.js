/**
 * Created by cohensha on 1/15/2015.
 */
angular
  .module("formsGeneratorApp")
  .factory("formDataService",formDataService);

formDataService.inject = [];
function formDataService(){
  return {
    selectValues:selectValues(),
    formLogic:formLogic()
  };

  function formLogic(){
    return {
      alert:function(str){
        alert(str);
      }
    }
  }

  function selectValues() {
    return {
      dependencyValues:[
        { value: "good",      icon: "medium-icon-good",   text:"Good"},
        { value: "error",     icon: "medium-icon-error",  text:"Bad"},
        { value: "available", icon: "",                   text:"Available" }
      ],
      dependencyValuesMonitor:[
        { value: "good", icon: "medium-icon-good", text: "Good" },
        { value: "error", icon: "medium-icon-error", text: "Error" },
        { value: "available", icon: "", text: "Available" },
        { value: "unavailable", icon: "", text: "Unavailable" }
      ],
      statuses:[
        { value: "error",   icon: "medium-icon-error",  text: "Error" },
        { value: "warning", icon: "medium-icon-warning",text: "Warning" },
        { value: "good",    icon: "medium-icon-good",   text: "Good" }
      ],
      dependencies:[
        { value: "dependency1",   icon: "medium-icon-error",  text: "Dependency1" },
        { value: "dependency2",   icon: "medium-icon-error",  text: "Dependency2" },
        { value: "dependency3",   icon: "medium-icon-error",  text: "Dependency3" },
      ],
      tags:[
        {value: "tag1", "text": "Tag1"},
        {value: "tag2", "text": "Tag2"},
        {value: "tag3", "text": "Tag3"}
      ]
    }
  }




}
