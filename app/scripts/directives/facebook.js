'use strict';

/**
 * @ngdoc directive
 * @name c2App.directive:facebook
 * @description
 * # facebook
 */
angular.module('c2App')
  .directive('facebook', function () {
    return {
      templateUrl: 'partials/facebook.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       	scope.saludar = function(){
          
       		alert('Hola!');
       		
       	}
      }
    };
  });
  