(function() {
	function TimerCtrl($scope,$interval) {
		
		//Initialize variables
		$scope.counter = 1500;
		var timeOut = null;
		
		//Start button
		$scope.start = $interval(function() {
			if($scope.counter <= 0) {
				$interval.cancel(timeOut);
				return;
			} 
			
			var counter = $scope.counter--;
			$interval(counter, 1000);
		});

		//Stop button
		$scope.stop = function() {
			$interval.cancel(timeOut);
		}
		
		//Reset button
		$scope.reset = function() {
			$interval.cancel(timeOut);
			$scope.counter = 1500;
			timeOut = null;
		}
	}
		
//    	$scope.counter = 1500;
//    	$scope.start = function(){
//        	$scope.counter--;
//        	if ($scope.counter > 0) {
//            	mytimeout = $timeout($scope.onTimeout, 1000);
//        	} else {
//            	alert("Time is up!");
//        	}
//    	}
//    
//		var mytimeout = $timeout($scope.onTimeout, 1000);
//    
//    	$scope.reset= function(){
//			$scope.counter = 1500;
//        	mytimeout = $timeout($scope.onTimeOut, 1000);
//		}
//	}
	
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

