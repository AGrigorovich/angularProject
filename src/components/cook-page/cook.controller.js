class CookController {
    constructor($scope, $state, $location) {
    	this.$scope = $scope;
        this.$location = $location;
    }
    Goprof(){
    	this.$location.path('/prof-all');
    }
};

export default CookController