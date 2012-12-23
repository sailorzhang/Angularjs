/**
 * Created with JetBrains WebStorm.
 * User: Sailor
 * Date: 12-12-23
 * Time: 下午10:20
 * To change this template use File | Settings | File Templates.
 */

angular.module("timeExampleModule",[])
    .factory("time",function($timeout){
        console.log($timeout);
        console.log(arguments);
        var time={};
        (function tick(){
            time.now = new Date().toString();
            $timeout(tick, 1000);
        })();
        return time;
    });

function ClockCtrl($scope,time){
    $scope.time = time;
}