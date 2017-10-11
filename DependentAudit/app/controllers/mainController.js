(function (angular) {
    'use strict';

    angular.module('arDepAudit')
    .controller('MainController', ['$scope', function ($scope) {
        $scope.itemArray = [
             { id: 1, name: 'Texas' },
             { id: 2, name: 'Kansas' },
             { id: 3, name: 'Oklahoma' },
             { id: 4, name: 'California' },
             { id: 5, name: 'Seattle' }
        ];

        $scope.selected = { value: $scope.itemArray[0] };
    }]);
})(angular);