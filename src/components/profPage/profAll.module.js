import angular from 'angular';
import profAllComponent from './profAll.component'

const profAllModule = angular
    .module('profAll.Page', [])
    .component('profAll.Page', profAllComponent)
    .name

export default profAllModule