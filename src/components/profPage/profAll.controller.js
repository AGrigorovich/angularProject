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
        // http.put('http://proflandia.herokuapp.com/profession', {email: vasya@com.ua, profession: 'Doctor'})	
    }
    testDisign(){
    	this.$location.path('/test-designer');
        // http.put('http://proflandia.herokuapp.com/profession', {email: vasya@com.ua, profession: 'Disign'})	
    }
    testBuilder(){
    	this.$location.path('/test-builder');
        // http.put('http://proflandia.herokuapp.com/profession', {email: vasya@com.ua, profession: 'Builder'})
    }
    testCook(){
    	this.$location.path('/test-cook');	
        // http.put('http://proflandia.herokuapp.com/profession', {email: vasya@com.ua, profession: 'Cook'})
    }
    testTeacher(){
    	this.$location.path('/test-teacher');
        // http.put('http://proflandia.herokuapp.com/profession', {email: vasya@com.ua, profession: 'Teacher'})
    }
};

export default PageController