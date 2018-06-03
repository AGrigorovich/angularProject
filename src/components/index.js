import angular from 'angular';
import Login from './login/login.module';
import PersonalArea from './accountPage/accountPage.module';
import Register from './register/register.module';
import ModalWindow from './modalWindow/modalWindow.module';
import Home from './homePage/home.module';
import Proffall from './profPage/profAll.module';
import doctorModule from './doctor-page/doctor.module';
import designerModule from './designer-page/designer.module';
import cookModule from './cook-page/cook.module';
import builderModule from './builder-page/builder.module';
import teacherModule from './teacher-page/teacher.module'


const rootModule = angular
    .module('app.components', [
        Login,
        Register,
        PersonalArea,
        ModalWindow,
        Home,
        Proffall,
        doctorModule,
        designerModule,
        cookModule,
        builderModule,
        teacherModule


    ])
    .name;

export default rootModule;