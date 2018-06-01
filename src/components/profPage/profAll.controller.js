class PageController {
    constructor($scope, $state, $location) {
    	this.$scope = $scope;
        this.$location = $location;
    }
    goHome() {
        this.$location.path('/');
    } 
};

export default PageController