(function (angular) {
    'use strict';

    angular.module('arDepAudit')
    .controller('MainController', ['$scope', '$state', function ($scope, $state) {
        $scope.itemArray = [
             { id: 1, name: 'Texas' },
             { id: 2, name: 'Kansas' },
             { id: 3, name: 'Oklahoma' },
             { id: 4, name: 'California' },
             { id: 5, name: 'Seattle' }
        ];

        $scope.selected = { value: $scope.itemArray[0] };

        $scope.goDep = function (id) {
            alert(id);
        }

        $scope.goTab = function (name) {
            $scope.active = name || 'new';

            if (name) {
                switch (name) {
                    case "new":
                        $state.go('depList');
                        break;
                }
            }
        }
    }]);
})(angular);