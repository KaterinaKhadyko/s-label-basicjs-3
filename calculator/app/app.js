angular.module('Calculator', []).
    controller('calculatorController', ['$scope', function($scope) {        
    $scope.buttons = [
            {
				value: 'clear'
			},
			{
				value: 'back'
			},
			{
				value: '7'
			},
			{
				value: '8'
			},
			{
				value: '9'
			},
			{
				value: '/'
			},
			{
				value: '4'
			},
			{
				value: '5'
			},
			{
				value: '6'
			},
			{
				value: '*'
			},
			{
				value: '1'
			},
			{
				value: '2'
			},
			{
				value: '3'
			},
			{
				value: '-'
			},
			{
				value: '0'
			},
			{
				value: '.'
			},
			{
				value: '='
			},
			{
				value: '+'
			}
		];        
        
        $scope.output = '0';
        
        function clc (array, index) {
            switch (array[index]) {
                case '*':
                    array[index] = array[index - 1] * array[index + 1];
                    break;
                case '/':
                    array[index] = array[index - 1] / array[index + 1];
                    break;
                case '+':
                    array[index] = +array[index - 1] + +array[index + 1];
                    break;
                case '-':
                    array[index] = array[index - 1] - array[index + 1];
                    break;
            }
            array[index - 1] = array[index + 1] = undefined;
            var arrayFiltered = array.filter(function (elem) {
                return elem !== undefined;
            });
            
            return arrayFiltered;
        }
        
        function recursiveCalc (array, sign1, sign2) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === sign1 || array[i] === sign2) {
                    return recursiveCalc(clc(array, i), sign1, sign2);
                }
            }
            
            return array;
        }
        
        function changeSign (sign) {
            var expr = $scope.output.split(' ');
            expr = expr.filter(function (val) {
                if (val != '') return val;
            });
            if (expr[expr.length - 1].match(/[+|\-|/|*|%]/)) {
                expr[expr.length - 1] = sign + ' ';
                $scope.output =  expr.join(' ');
                return true;
            } else return false;
        }
        
        function sanitize (arr) {
            if (arr[arr.length - 1].match(/[+|\-|/|*]/)) {
                arr.pop();
            }
            
            return arr;
        }
        
        function getValue (event) {
            return event.target.innerText;
        }
        
        function getType (value) {
            if (value.match(/[+|\-|/|*|%]/)) {
                return 'oper';
            } else if (value.match(/\d/)) {
                return 'number';
            } else if (value === '.') {
                return 'point';
            } else if (value === '=') {
                return 'equals';
            } else return value;
        }
        
        var clickFunctions = {
            oper: function (value) {
                if (!changeSign(value)) {
                    $scope.output += ' ' + value + ' ';
                } 
            },
            number: function (value) {
                if ($scope.output === '0') {
                    $scope.output = '';
                }        
                $scope.output += value;
            },
            clear: function () {
                $scope.output = '0';            
            },
            point: function() {
                var expr = $scope.output.split(' ');
                if (expr[expr.length - 1].indexOf('.') != -1) {
                    return false;
                }
                else {
                    $scope.output += '.';
                }
            },
            back: function () {
                $scope.output = $scope.output.slice(0, $scope.output.length - 1);
                if ($scope.output === '') {
                    $scope.output = '0';
                }            
            },
            equals: function () {
                var array = $scope.output.split(' ');
                array = array.filter(function (el) {
                    return el !== "";
                });
                array = sanitize(array);
                $scope.output = recursiveCalc(recursiveCalc(array, '*', '/'), '+', '-').toString();
            }
        };

        $scope.input = function(event) {
            var value = getValue(event);
            var type = getType(value);
            return clickFunctions[type](value);              
        };
    
}]);