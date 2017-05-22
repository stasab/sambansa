angular.module('sambansa').config([ '$urlRouterProvider', '$stateProvider', '$locationProvider', '$mdThemingProvider',
    function ( $urlRouterProvider, $stateProvider, $locationProvider, $mdThemingProvider) {



        /* DEFAULT ROUTE */
        // $urlRouterProvider.otherwise('/');

        /* ROUTER */
        // $stateProvider
        //     .state('main', {
        //         url: '/',
        //         controller: 'sambansaController',
        //         templateUrl: 'app/views/main.index.html'
        //     });

        $locationProvider.html5Mode(true);


        // Color pallete
        $mdThemingProvider.definePalette('carnegie', {
            '50': 'e7f2f9',
            '100': 'c3def1',
            '200': '9bc9e7',
            '300': '72b3dd',
            '400': '54a2d6',
            '500': '3692cf',
            '600': '308aca',
            '700': '297fc3',
            '800': '2275bd',
            '900': '1663b2',
            'A100': 'e5f1ff',
            'A200': 'b2d5ff',
            'A400': '7fbaff',
            'A700': '65acff',
            'contrastDefaultColor': 'dark',
            'contrastDarkColors': undefined,
            'contrastLightColors': undefined
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('carnegie')
            .accentPalette('carnegie');

    }
]);