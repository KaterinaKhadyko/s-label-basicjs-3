app.controller('baseCalcController', function($scope, outputFactory) {
    $scope.showMath = function () {
        outputFactory.show = !outputFactory.show;
        if (outputFactory.pointer === 'math') {
            outputFactory.pointer = 'base';
        } else {
            outputFactory.pointer = 'math';
        }        
    };
    
    $scope.getValue = function (event) {
        return event.target.innerText;
    }
    
    $scope.outputFactory = outputFactory;
    outputFactory.outputFactory = outputFactory;
    
    $scope.buttons = [
            {
				value: 'clear'
			},
			{
				value: 'back'
			},
            {
				value: '+/-'
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
            if (outputFactory.output[outputFactory.output.length - 1] == ' ' && outputFactory.output[outputFactory.output.length - 2].match(/[+|\-|/|*|%]/)) {
                outputFactory.output = outputFactory.output.slice(0, outputFactory.output.length - 2) + ' ' + sign + ' ';
                return true;
            } else {
                return false;
            }             
        }
        
        function sanitize (arr) {
            if (arr[arr.length - 1].match(/[+|\-|/|*]/)) {
                arr.pop();
            }            
            return arr;
        }       
        
        function getType (value) {            
            if (value === '+/-') {
                return 'switchSign';
            } else if (value.match(/\d/)) {
                return 'number';
            } else if (value === '.') {
                return 'point';
            } else if (value === '=') {
                return 'equals';
            } else if (value.match(/[+|\-|/|*]/)) {
                return 'oper';
            }  else return value;
        }
        
        var clickFunctions = {
            oper: function (value) {
                if (!outputFactory.result) {
                    outputFactory.output += outputFactory.currentNumber;
                }
                
                if (!changeSign(value)) {
                    outputFactory.output += ' ' + value + ' ';
                    var array = outputFactory.output.split(' ');
                    array = array.filter(function (el) {
                        return el !== "";
                    });
                    array = sanitize(array);
                    outputFactory.currentNumber = recursiveCalc(recursiveCalc(array, '*', '/'), '+', '-').toString();
                    outputFactory.result = true;
                }
            },
            number: function (value) {
                if (outputFactory.currentNumber === '0') {
                    outputFactory.currentNumber = '';
                }
                if (outputFactory.output === '0') {
                    outputFactory.output = '';
                }          
                if (outputFactory.result) {
                    outputFactory.currentNumber = value;
                    outputFactory.result = false;
                } else {
                    outputFactory.currentNumber +=value;
                }
            },
            clear: function () {
                outputFactory.output = '0';
                outputFactory.currentNumber = '0';
                outputFactory.result = false;                
            },
            point: function() {
                if (outputFactory.currentNumber.indexOf('.') != -1) {
                    return false;
                }
                else {
                    outputFactory.currentNumber += '.';
                }
            },
            back: function () {
                if (outputFactory.currentNumber != '0') {
                    outputFactory.currentNumber = outputFactory.currentNumber.slice(0, outputFactory.currentNumber.length - 1);
                    outputFactory.output = outputFactory.output.slice(0, outputFactory.output.length - 1);
                } 
                if (outputFactory.currentNumber === '') {
                    outputFactory.currentNumber = '0';
                } 
            },
            equals: function () {
                outputFactory.output += outputFactory.currentNumber;
                var array = outputFactory.output.split(' ');
                array = array.filter(function (el) {
                    return el !== "";
                });
                array = sanitize(array);
                outputFactory.currentNumber = recursiveCalc(recursiveCalc(array, '*', '/'), '+', '-').toString();
                outputFactory.output = '';
                outputFactory.result = true;
            },
            switchSign: function () {
                if (+outputFactory.currentNumber > 0) {
                    outputFactory.currentNumber = '-' + outputFactory.currentNumber;                    
                } else if (+outputFactory.currentNumber < 0) {
                    outputFactory.currentNumber = outputFactory.currentNumber.slice(1);                    
                }                    
            } 
        };

        $scope.input = function(event) {
            var value = $scope.getValue(event);
            var type = getType(value);
            return clickFunctions[type](value);              
        };
    
});