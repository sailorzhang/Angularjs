/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 11:00 AM
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module("form-example", []);

var INTEGER_REGEXP = /^\-?\d*$/;
app.directive("integer", function () {
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                if (INTEGER_REGEXP.test(viewValue)) {
                    ctrl.$setValidity('integer', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('integer', false);
                    return undefined;
                }
            });
        }
    };
});

var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
app.directive("smartFloat", function () {
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                if (FLOAT_REGEXP.test(viewValue)) {
                    ctrl.$setValidity("float", true);
                    return parseFloat(viewValue.replace(',', '.'));
                } else {
                    ctrl.$setValidity('float', false);
                    return undefined;
                }
            });
        }
    };
});

var Controller = ["$scope", function ($scope) {

}];