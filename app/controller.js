angular
    .module('sambansa')
    .controller('sambansaController', sambansaController);

sambansaController.$inject = ['$scope', '$rootScope', 'translationFactory', '$localStorage'];

/**
 * sambansaController
 *
 * @param $scope
 * @param $rootScope
 * @param translationFactory
 * @param $localStorage
 */
function sambansaController($scope, $rootScope, translationFactory, $localStorage) {

    // FullPage
    $scope.opt = {
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 800,
        anchors: ['home', 'aboutUs', 'gallery', 'carnival', 'joinUs', 'bookUs', 'contact'],

        fitToSectionDelay: 1000,

        onLeave: function (index, nextIndex, direction) {


            let gots = document.getElementById('fp-nav');
            let ul = angular.element(gots).children();
            let lis = angular.element(ul).children();

            angular.element(lis).removeClass('active');

            angular.element(lis[index]).addClass('active');

            // angular.element(element[0].querySelector('.list-scrollable'))
        }

    };
    
}