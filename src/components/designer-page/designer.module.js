import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DesignerComponent from './designer.components';

const designerModule = angular
    .module('designer.page', [uiRouter])
    .component('designer.page', DesignerComponent)
    .name
    	
export default designerModule