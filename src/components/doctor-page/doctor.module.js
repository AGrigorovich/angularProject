import angular from 'angular';
import DoctorComponent from './doctor.components';
import uiRouter from 'angular-ui-router';

const doctorModule = angular
    .module('doctor.page', [uiRouter])
    .component('doctor.page', DoctorComponent)
    .name
    	
export default doctorModule