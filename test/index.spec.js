describe('app simpleThing', function() {
	var element;
	var $scope;
	beforeEach(module('app'));
	beforeEach(inject(function($compile, $rootScope) {
		$scope = $rootScope;
		element = angular.element('<div simple-thing></div>');
		$compile(element)($rootScope);
	}));
	it('should have class test', function() {
		expect(element.hasClass('test')).to.be.true;
	});
	it('should toggle class test2 to element', function() {
		$scope.toggle();
		expect(element.hasClass('test2')).to.be.true;
		$scope.toggle();
		expect(element.hasClass('test2')).to.be.false;
	});
});

describe('app simpleCtrl', function() {
	var scope, ctrl;
	beforeEach(module('app'));
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('simpleCtrl', {$scope: scope});
	}));
	it('controller should have test array', function() {
		scope.$digest();
		expect(scope.test).to.be.a('array');
	});
	it('controller should have method save', function() {
		expect(scope.save).to.be.a('function');
	});
	it('controller should update test when save is invoked', function() {
		expect(scope.test.length).to.equal(3);
		scope.save('test');
		expect(scope.test.length).to.equal(4);
		expect(scope.test[3]).to.equal('test');
	})
});

describe('app simpleFactory', function() {
	var simpleFactory;
	beforeEach(module('app'));
	beforeEach(inject(function(_simpleFactory_) {
		simpleFactory = _simpleFactory_;
	}));
	it('should return hello world', function() {
		expect(simpleFactory.helloWorld()).to.equal('Hello World!');
	})
})