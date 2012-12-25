/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 1:13 PM
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module("myApp", []);
app.filter('greet', function () {
    return function (name) {
        return "Hello" + name + "!";
    };
});