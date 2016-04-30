angular.module("main", [])


angular.module("main")
.controller("mainController", ["$scope", "$http", function($scope, $http){
	$scope.getExcuse = function(){
		$http.get("/getExcuse")
		.then(function(returnData){
			$scope.excuse = returnData.data;
		})
	}
}])