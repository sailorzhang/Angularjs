/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 10:07 AM
 * To change this template use File | Settings | File Templates.
 */
var Controller = ["$scope", function ($scope) {
    $scope.master = {};
    $scope.update= function(user){
        $scope.master = user;
    };

    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    };

    $scope.user = {};
}];