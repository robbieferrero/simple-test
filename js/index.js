/** 
 * Contrived examples of angular concepts to test
 */

angular.module('app', []);

angular.module('app').directive('simpleThing', function() {
	return {
		restrict: 'A',
		link: function(scope, element) {
			element.addClass('test');
			scope.toggle = function() {
				element.toggleClass('test2');
			}
		}
	}
});

angular.module('app').controller('simpleCtrl', function($scope) {
	$scope.test = [1,2,3];
	$scope.save = function(v) {
		$scope.test.push(v);
	};
});

angular.module('app').factory('simpleFactory', function() {
	return {
		helloWorld: function() {
			return "Hello World!";
		}
	}
})