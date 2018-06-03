import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/index.js';
import './assets/scss/main.scss';
// import CheckAccessService from './heplers/CheckAcces.service'

const App = angular
    .module('app', [
        Components,
        uiRouter
    ])
    .component('app', AppComponent)
    // .service('CheckAccessService', CheckAccessService)
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            })
            .state('login', {
                url: '/login',
                component: 'login'
            })
            .state('register', {
                url: '/register',
                component: 'register'
            })
            .state('accountPage',{
                url: '/account-page',
                component: 'accountPage'
            })
            .state('profAll', {
                url: '/prof-all',
                component: 'profAll.Page'
            })
            .state('doctor-page', {
                url: '/test-doctor',
                component: 'doctor.page'
            })
            .state('disigner-page', {
                url: '/test-designer',
                component: 'designer.page'
            })
            .state('builder-page', {
                url: '/test-builder',
                component: 'builder.page'
            })
            .state('cook-page', {
                url: '/test-cook',
                component: 'cook.page'
            })
            .state('teacher-page', {
                url: '/test-teacher',
                component: 'teacher.page'
            })
            
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    }])
    
export default App;
