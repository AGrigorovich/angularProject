import angular from 'angular';
import BuilderComponent from './builder.components';
import uiRouter from 'angular-ui-router';

const builderModule = angular
    .module('Builder.page', [uiRouter])
    .component('Builder.page', BuilderComponent)
    .name
    	
export default builderModule