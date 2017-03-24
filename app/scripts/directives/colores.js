'use strict';

/**
 * @ngdoc directive
 * @name c2App.directive:colores
 * @description
 * # colores
 */
angular.module('c2App')
  .directive('colores', function () {
    return {
      templateUrl: 'partials/colores.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       		scope.mostrarColor = function(color){

       		

       		
       	}
      }
    };
  });
