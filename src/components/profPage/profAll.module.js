import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profAllComponent from './profAll.component'

const profAllModule = angular
    .module('profAll.Page', [uiRouter])
    .component('profAll.Page', profAllComponent)
    .name

export default profAllModule