'use strict';

describe('Directive: colores', function () {

  // load the directive's module
  beforeEach(module('c2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<colores></colores>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the colores directive');
  }));
});
