angular.module('smart-form').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state('/',{
        url:'/',
        templateUrl:'templates/home.html',
        cache: false,
        
    });
  
    
}).run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
});
