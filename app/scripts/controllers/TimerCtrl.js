(function() {
	function TimerCtrl($scope,$interval) {
		
		//Initialize variables
		$scope.counter = 1500;
		
		//Start button
		$scope.start = function() {
			$interval(function() {
				if($scope.counter <= 0) {
					$interval.cancel();
					return;
				} 
				
				$scope.counter--;
				console.log($scope.counter);
			}, 1000, 5); //change 5 to $scope.counter or to a max # of times the start function will play
	  	}
		
		
		//Stop button
		$scope.stop = function() {
			$interval.cancel();
		}
		
		//Reset button
		$scope.reset = function() {
			$interval.cancel();
			$scope.counter = 1500;
		}
	}
	
    angular
        .module('blocTime')
        .controller('TimerCtrl', ['$scope', '$interval', TimerCtrl]);
})();


//setInterval for 1000ms
//	subtract 1 from counter
//	if counter === 0
//		pause/play button disappears
//		destroy setInterval
//	
//counter dynamically update and convert into minutes + seconds
//
//if pause clicked
//	destroy setInterval
//	turn pause to play
//if play clicked
//	create new setInterval
//	turn play to pause
//if reset clicked
//	destroy setInterval
//	reset counter value
//	create new setInterval

