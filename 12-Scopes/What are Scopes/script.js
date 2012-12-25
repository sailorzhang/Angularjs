/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 2:44 PM
 * To change this template use File | Settings | File Templates.
 */
var MyController = ["$scope", function ($scope) {
    $scope.username = 'World';
    $scope.sayHello = function () {
        $scope.greeting = 'Hello' + $scope.username + '!';
    };
}];