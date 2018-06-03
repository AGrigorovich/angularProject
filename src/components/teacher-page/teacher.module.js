import angular from 'angular';
import teacherComponent from './teacher.components';
import uiRouter from 'angular-ui-router';

const teacherModule = angular
    .module('teacher.page', [uiRouter])
    .component('teacher.page', teacherComponent)
    .name
    	
export default teacherModule