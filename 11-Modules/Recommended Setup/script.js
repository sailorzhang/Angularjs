/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 1:13 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('xmpl.service', []).value('greeter', {
    salutation:'Hello',
    localize:function (localization) {
        this.salutation = localization.salutation;
    },
    greet:function (name) {
        return this.salutation + ' ' + name + '!';
    }
}).value('user', {
        load:function (name) {
            this.name = name;
        }
    });

angular.module('xmpl.directive', []);

angular.module('xmpl.filter', []).filter('add', function () {
    return function (value) {
        return value + " has added filter."
    };
});

angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter']).run(function (greeter, user) {
    console.log(greeter);
    console.log(user);
    greeter.localize({
        salutation:'Bonjour'
    });
    user.load('World');
});

var XmplController = function ($scope, greeter, user) {
    $scope.greeting = greeter.greet(user.name);
};
