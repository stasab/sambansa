function translationFactory($http, $rootScope, $localStorage) {
    var translationFactory = {};

    translationFactory.get = function (language) {
        var path = '../../Work/Sambansa/translation/translation_' + language + '.js';
        $rootScope.translation = translation[language];
        $localStorage.activeLanguage = language;


        //
        // $http
        //     .get(path)
        //     .then(function (response) {
        //         $rootScope.translation = jsyaml.load(response.data);
        //     });
    };


    return translationFactory;
}


angular
    .module('sambansa')
    .factory('translationFactory', ['$http', '$rootScope', '$localStorage', translationFactory]);