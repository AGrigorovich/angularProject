import angular from 'angular';
import profAllComponent from './profAll.component'
import uiRouter from 'angular-ui-router';

const profAllModule = angular
    .module('profAll.Page', [uiRouter])
    .component('profAll.Page', profAllComponent)
    .name

export default profAllModule