'use strict';

angular.module('zharaGulp')
  .directive('appHeader', function () {
    return {
      templateUrl: 'app/header_directive/header_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });