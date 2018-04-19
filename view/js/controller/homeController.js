angular.module('smart-form').controller('homeController',function($scope, $http){
    $scope.register = function(data){
    	console.log(data);
    	$http.post('./js/controller/teste.php', {        
		  data: $.param(data),
		  headers:{'Content-Type': 'application/x-www-form-urlencoded'}, // Remove this comma
		})
		.then(function(response){
		  console.log(response.data)
		});
    }
});
