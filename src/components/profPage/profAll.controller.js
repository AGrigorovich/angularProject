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
    testDisign(){
    	this.$location.path('/test-designer');	
    }
    testBuilder(){
    	this.$location.path('/test-builder');
    }
    testCook(){
    	this.$location.path('/test-cook');	
    }
    testTeacher(){
    	this.$location.path('/test-teacher');
    }
};

export default PageController