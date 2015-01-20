/**
 * Created by cohensha on 1/20/2015.
 */
angular
  .module("formsGeneratorApp")
  .factory("permissionsHandler",permissionsHandler);

permissionsHandler.$inject = ["$http","$q"];
function permissionsHandler($http,$q){

  var data = {
    userPermissions:{
      role:"user",
      addition:"31",
      license:"gold"
    },
    allPermissionsGroups:null
  }

  return {
    setPermissionForNestedObject:setPermissionForNestedObject,
    setObjectByPermissions:setObjectByPermissions,
    hasAccess:hasAccess

  };

  function hasAccess(obj,accessType){
    if (!obj.permissionsRules){
      return true;
    }else{
      if(obj.permissionsRules[accessType] === false){
        return false;
      }else{
        return true;
      }
    }
  }

  function setPermissionForNestedObject(obj,testCases){

    testCases = angular.isArray(testCases) ? testCases : [testCases];
    angular.forEach(testCases,function(testCase){
      var arr = testCase.split(".");
      var myPlucks = obj[arr[0]];
      for(var i=1;i<arr.length; i++){
        myPlucks = _.flatten(_.pluck(myPlucks, arr[i]));
      }
      angular.forEach(myPlucks,function(objToTest){
        if(objToTest){
          objToTest = setObjectByPermissions(objToTest);
        }
      });

    });
  }

  function setObjectByPermissions(obj){
    var canRead = true,
      canWrite = true;
    if(obj.permissions){
      if(obj.permissions.permissionGroup){
        if(data.allPermissionsGroups){
          obj.permissions = data.allPermissionsGroups[obj.permissions.permissionGroup];
          return setObjectByPermissions(obj);
        }else{
          $http.get("settings/permissions/permissionsGroups.json")
            .success(function (results, status, headers, config) {
              data.allPermissionsGroups = results;
              obj.permissions = data.allPermissionsGroups[obj.permissions.permissionGroup];
              return setObjectByPermissions(obj);
            });
        }
      }
      if(obj.permissions.read){
        canRead = isHasPermission(obj.permissions.read);
      }
      if(canRead == true){
        if(obj.permissions.write){
          canWrite = isHasPermission(obj.permissions.write);
        }
      }else{
        canWrite = false;
      }
    }
    return setObjectPermissions (obj, canRead, canWrite)
  }

  function isHasPermission(objPermissions){
    var hasPermission = true;
    var permissionsArray = [];
    if(objPermissions.onlyMembersOf){
      for(var key in objPermissions.onlyMembersOf){
        permissionsArray = objPermissions.onlyMembersOf[key];
        if(permissionsArray && permissionsArray.length > 0){
          if(permissionsArray.indexOf(data.userPermissions[key]) == -1){
            hasPermission = false;
            break;
          }
        }
      }
    }else{
      if(objPermissions.allButMembersOf){
        for(var key in objPermissions.allButMembersOf){
          permissionsArray = objPermissions.allButMembersOf[key];
          if(permissionsArray && permissionsArray.length > 0){
            if(permissionsArray.indexOf(data.userPermissions[key]) > -1){
              hasPermission = false;
              break;
            }
          }
        }
      }
    }

    return hasPermission;
  }

  function setObjectPermissions(obj,canRead,canWrite) {
    if(!(canRead && canWrite)){ // we add premissionRules only if one of the properties is false
      obj.permissionsRules = {
        canRead: canRead,
        canWrite: canWrite
      }
    }
    return obj;
  }
}
