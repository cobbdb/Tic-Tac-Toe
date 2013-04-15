function Controller($scope) {
    $scope.range = _.range(3);
    $scope.click = function ($event) {
        return true;
    };
}
