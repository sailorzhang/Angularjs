/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 12/25/12
 * Time: 5:13 PM
 * To change this template use File | Settings | File Templates.
 */
function FakeBrowser(initUrl, baseHref) {
    this.onUrlChange = function(fn) {
        this.urlChange = fn;
    };

    this.url = function() {
        return initUrl;
    };

    this.defer = function(fn, delay) {
        setTimeout(function() { fn(); }, delay || 0);
    };

    this.baseHref = function() {
        return baseHref;
    };

    this.notifyWhenOutstandingRequests = angular.noop;
}

var browsers = {
    html5: new FakeBrowser('http://www.host.com/base/path?a=b#h', '/base/index.html'),
    hashbang: new FakeBrowser('http://www.host.com/base/index.html#!/path?a=b#h', '/base/index.html')
};

function Html5Cntl($scope, $location) {
    $scope.$location = $location;
}

function HashbangCntl($scope, $location) {
    $scope.$location = $location;
}

function initEnv(name) {
    var root = angular.element(document.getElementById(name + '-mode'));
    angular.bootstrap(root, [function($compileProvider, $locationProvider, $provide){
        $locationProvider.html5Mode(true).hashPrefix('!');

        $provide.value('$browser', browsers[name]);
        $provide.value('$document', root);
        $provide.value('$sniffer', {history: name == 'html5'});

        $compileProvider.directive('ngAddressBar', function() {
            return function(scope, elm, attrs) {
                var browser = browsers[attrs.browser],
                    input = angular.element('<input type="text">').val(browser.url()),
                    delay;

                input.bind('keypress keyup keydown', function() {
                    if (!delay) {
                        delay = setTimeout(fireUrlChange, 250);
                    }
                });

                browser.url = function(url) {
                    return input.val(url);
                };

                elm.append('Address: ').append(input);

                function fireUrlChange() {
                    delay = null;
                    browser.urlChange(input.val());
                }
            };
        });
    }]);
    root.bind('click', function(e) {
        e.stopPropagation();
    });
}

initEnv('html5');
initEnv('hashbang');