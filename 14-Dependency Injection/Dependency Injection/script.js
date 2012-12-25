/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 3:33 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module("myModule", []).factory('greeter', function ($window) {
    return {
        greet:function (text) {
            $window.alert(text);
        }
    };
});

//var injector = angular.injector(['myModule']);
//
//var greeter = injector.get('greeter');

function MyController($scope, greeter) {
    $scope.sayHello = function () {
        greeter.greet("Hello World!");
    };
}

//injector.instantiate(MyController);
