var app = angular.module("myApp" , []);

app.controller("myController" , function($scope , $http , $location){
	$scope.getRandomQuote = function(){
		console.log("sending request")

		var url = "https://andruxnet-random-famous-quotes.p.mashape.com/";
		var h = {
			"X-Mashape-Key": "37PnZ4VtcpmshHnSbvgGCWDjNjq3p1LpWc5jsn4G4MCAVy85GC",
			"Content-Type": "application/x-www-form-urlencoded",
			"Accept": "application/json"
		};

		var req = {
			method: "POST",
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
			headers: h
		};

		$http(req)
			.then(function(response){
				console.log(response.status , response.headers , response.body);
				$scope.formattedData = response.data.quote + " - " + response.data.author;
				$scope.twitterUrl="https://twitter.com/intent/tweet?text="+$scope.formattedData;
				console.log($scope.twitterUrl);
			});
	};

	$scope.tweet = function(){
		$location.url($scope.twitterUrl);
	}
});
