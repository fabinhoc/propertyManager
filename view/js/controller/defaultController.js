angular.module('smart-form').controller('defaultController',function($scope){
	
    $scope.load = function() {
    	var script1 = document.createElement('script');
       	script1.type = 'text/javascript';
       	script1.src = "lib/functions.js";
   		document.body.appendChild(script1);
    }
    $scope.load();
});
