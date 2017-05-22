angular
    .module('sambansa')
    .run(['$localStorage', '$rootScope', 'translationFactory',
        function ($localStorage, $rootScope, translationFactory) {
            
            // Translation
            $rootScope.activeLanguage = $localStorage.activeLanguage || 'en';
            translationFactory.get($rootScope.activeLanguage);

            // Translation
            $rootScope.changeTrans = function (language) {
                translationFactory.get(language);
                $localStorage.activeLanguage = language;
                $rootScope.activeLanguage = language;
            };

        }
    ])