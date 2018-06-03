import angular from 'angular';
import BuilderComponent from './builder.components';
import uiRouter from 'angular-ui-router';

const builderModule = angular
    .module('builder.page', [uiRouter])
    .component('builder.page', BuilderComponent)
    .name
    	
export default builderModule