/**
 * Created with JetBrains WebStorm.
 * User: Sailor
 * Date: 12-12-23
 * Time: 下午9:11
 * To change this template use File | Settings | File Templates.
 */
angular.module('directive',[]).directive('contenteditable',function(){
    return {
        require:'ngModel',
        link:function(scope,elm,attrs,ctrl){
            //view -> model
            console.log(ctrl);
            elm.bind('blur',function(){
                scope.$apply(function(){
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model -> view
            ctrl.$render= function(value){
                elm.html(value);
            };

            ctrl.$setViewValue(elm.html());
        }
    };
});