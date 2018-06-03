class PageController {
    constructor($scope, $state, $location) {
    	this.$scope = $scope;
        this.$location = $location;
    }
    goHome() {
        this.$location.path('/');
    }
    testDoctor(){
    	this.$location.path('/test-doctor');	
    }
};

export default PageController