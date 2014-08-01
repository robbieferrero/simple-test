describe('app haThing', function() {
	var element;
	var $scope;
	beforeEach(module('app'));
	beforeEach(inject(function($compile, $rootScope) {
		$scope = $rootScope;
		element = angular.element('<div ha-thing>{{2 + 2}}</div>');
		$compile(element)($rootScope);
	}));

	it('should equal 4', function() {
		$scope.$digest();
		expect(element.html()).to.equal('4');
	});
	it('should have class test', function() {
		expect(element.hasClass('test')).to.be.true;
	});
	it('should toggle class thing to element', function() {
		$scope.thing();
		expect(element.hasClass('thing')).to.be.true;
		$scope.thing();
		expect(element.hasClass('thing')).to.be.false;
	});
});

describe('app haCtrl', function() {
	var scope, ctrl;
	beforeEach(module('app'));
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('haCtrl', {$scope: scope});
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

describe('app haFactory', function() {
	var haFactory;
	beforeEach(module('app'));
	beforeEach(inject(function(_haFactory_) {
		haFactory = _haFactory_;
	}));
	it('should return hello world', function() {
		expect(haFactory.helloWorld()).to.equal('Hello World!');
	})
})