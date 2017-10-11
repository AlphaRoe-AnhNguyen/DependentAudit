(function (angular) {
    'use strict';

    angular.module('arDepAudit', ['ui.bootstrap', 'ui.router', 'ui.select', 'ngSanitize'])
        .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(false);
        }])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'app/views/main.html',
                controller: 'MainController'
            });
        }])
        .run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                $state.go('main');
            });
        }])
})(angular);