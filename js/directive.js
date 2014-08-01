angular.module('app', []);

angular.module('app').directive('haThing', function() {
	return {
		restrict: 'A',
		link: function(scope, element) {
			element.addClass('test');
			scope.thing = function() {
				element.toggleClass('thing');
			}
		}
	}
});

angular.module('app').controller('haCtrl', function($scope) {
	$scope.test = [1,2,3];
	$scope.save = function(v) {
		$scope.test.push(v);
	};
});

angular.module('app').factory('haFactory', function() {
	return {
		helloWorld: function() {
			return "Hello World!";
		}
	}
})