app.controller('mathCalcController', function($scope, outputFactory) {
    $scope.outputFactory = outputFactory;    
    
    $scope.mathFunctions = {
        'sin x': function (value) {
            return Math.sin(value).toFixed(5);
        },
        'cos x': function (value) {
            return Math.cos(value).toFixed(5);
        },
        'tg x': function (value) {
            return Math.tan(value).toFixed(5);
        },
        'log x': function (value) {
            return Math.log(value).toFixed(5);
        },
    }
    
    $scope.mathClick = function (event) {
        var value = $scope.getValue(event);
        outputFactory.currentNumber = $scope.mathFunctions[value](outputFactory.currentNumber);
        outputFactory.result = true;
        outputFactory.output = outputFactory.currentNumber;
        
    }
    
    $scope.extraButtons = [
        {
            value: 'sin x'
        },
        {
            value: 'cos x'
        },
        {
            value: 'tg x'
        },
        {
            value: 'log x'
        }
    ];
});