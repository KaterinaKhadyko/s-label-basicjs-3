var app = angular.module('app', []);

app.factory('outputFactory', function () {
    return {
        output: '',
        currentNumber: '0',
        pointer: 'math',
        result: false,
        show: false
    };
});

app.factory('ButtonsFactory', ['$q', '$http', function($q, $http) {
	var cacheButtons = [];

	return {
		extraButtons: function() {
			var deferred = $q.defer();

			if (cacheButtons.length) {
				deferred.resolve(cacheButtons);
			} else {
				$http.get('./data.json').then(function(buttons) {
					deferred.resolve(buttons.data.extraButtons);
					cacheButtons = buttons.data.extraButtons;
				});
			}

			return deferred.promise;
		}
	};
}]);
