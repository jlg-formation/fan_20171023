import 'angular';
import '@uirouter/angularjs';
import './asf-layout/asf-layout.module.js';
import './asf-star/asf-star.module.js';
import './asf-route/asf-route.module.js';
import 'angular/angular-csp.css';
import './style.scss';

angular.module('main', ['asf-layout','asf-star', 'asf-route']);
