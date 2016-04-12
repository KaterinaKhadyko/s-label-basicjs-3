;(function(app) {
	'use strict';

	app.run(function($rootScope) {
        $rootScope.buttons = [
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
        
        $rootScope.output = '0';
        
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
            var expr = $rootScope.output.split(' ');
            expr = expr.filter(function (val) {
                if (val != '') return val;
            });
            if (expr[expr.length - 1].match(/[+|\-|/|*|%]/)) {
                expr[expr.length - 1] = sign + ' ';
                $rootScope.output =  expr.join(' ');
                return true;
            } else return false;
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
                    $rootScope.output += ' ' + value + ' ';
                } 
            },
            number: function (value) {
                if ($rootScope.output === '0') {
                    $rootScope.output = '';
                }        
                $rootScope.output += value;
            },
            clear: function () {
                $rootScope.output = '0';            
            },
            point: function() {
                var expr = $rootScope.output.split(' ');
                if (expr[expr.length - 1].indexOf('.') != -1) {
                    return false;
                }
                else {
                    $scope.output += '.';
                }
            },
            back: function () {
                $rootScope.output = $rootScope.output.slice(0, $rootScope.output.length - 1);
                if ($rootScope.output === '') {
                    $rootScope.output = '0';
                }            
            },
            equals: function () {
                var array = $rootScope.output.split(' ');
                array = array.filter(function (el) {
                    return el !== "";
                });
                $rootScope.output = recursiveCalc(recursiveCalc(array, '*', '/'), '+', '-').toString();
            }
        };

        $rootScope.input = function(event) {
            var value = getValue(event);
            var type = getType(value);
            return clickFunctions[type](value);              
        };
    });
})(angular.module('app'));