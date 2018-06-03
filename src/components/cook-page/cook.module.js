import angular from 'angular';
import CookComponent from './cook.components';
import uiRouter from 'angular-ui-router';

const cookModule = angular
    .module('cook.page', [uiRouter])
    .component('cook.page', CookComponent)
    .name
    	
export default cookModule