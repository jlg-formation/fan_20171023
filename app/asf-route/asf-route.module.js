import homeHtml from './tmpl/home.html';
import productsHtml from './tmpl/products.html';
import servicesHtml from './tmpl/services.html';
import contactHtml from './tmpl/contact.html';

angular.module('asf-route', ['ui.router'])
	.config(function($stateProvider){
        $stateProvider.state({
            name: 'home',
            url: '/',
            template: homeHtml
        });
        $stateProvider.state({
            name: 'products',
            url: '/products',
            template: productsHtml
        });
        $stateProvider.state({
            name: 'services',
            url: '/services',
            template: servicesHtml
        });
        $stateProvider.state({
            name: 'contact',
            url: '/contact',
            template: contactHtml
        });
    });

