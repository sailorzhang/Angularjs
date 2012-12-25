/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 3:02 PM
 * To change this template use File | Settings | File Templates.
 */
var EventController = ["$scope", function ($scope) {
    $scope.count = 0;
    $scope.$on("MyEvent",function(){
        $scope.count++;
    });
}];