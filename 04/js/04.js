/**
 * Created with JetBrains WebStorm.
 * User: Sailor
 * Date: 12-12-23
 * Time: 下午8:20
 * To change this template use File | Settings | File Templates.
 */
function PhoneListCtrl($scope){
    $scope.phones= [
        {"name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.",
        age:2},
        {"name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.",
        age:0},
        {"name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet.",
        age:1}
    ];

    $scope.orderProp = 'age';
}