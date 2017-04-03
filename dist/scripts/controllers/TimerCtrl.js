(function() {
	function TimerCtrl($scope, $interval, Tasks) {
		$scope.tasks = Tasks;
				
		var mySound = new buzz.sound( "/assets/sounds/ElevatorDing.mp3", {
  			preload: true,
		});
		
		//Initialize variables
		$scope.counter = 1500;
		$scope.break = 300;
		$scope.workTimer = true;
		$scope.breakTimer = false;
		$scope.workTimerRunning = false;
		$scope.breakTimerRunning = false;
				
		//Start button
		$scope.start = function() {
			$scope.workTimer = true;
			$scope.workTimerRunning = true;
			startWork = $interval(function() {
				if($scope.counter <= 0) {
					$interval.cancel(startWork);
					
					mySound.play();
					console.log(mySound);
					
					$scope.breakTimer = true
					console.log(($scope.breakTimer))
					return;
				} 
				
				$scope.counter--;
				console.log($scope.counter);
			}, 1000)
		}
		
		//Stop button
		$scope.stop = function() {
			$scope.workTimer = true;
			$interval.cancel(startWork);
			startWork = undefined;
			$scope.workTimerRunning = false;
		}
			
		//Reset button
		$scope.reset = function() {
			$scope.workTimer = true;
			$interval.cancel(startWork);

	
			//$scope.tasks = $scope.counter = 1500;
			$scope.counter = 1500;
			$scope.workTimerRunning = false;
		}
		
		//Start break
		$scope.startBreak = function() {
			$scope.breakTimer = true;
			$scope.breakTimerRunning = true;
			startBreakSession = $interval(function() {
				if ($scope.break <= 0) {
					$interval.cancel(startBreakSession);
					
					mySound.play();
					console.log(mySound);
					
					$scope.breakTimer = false;
					$scope.counter = 1500;
					$scope.workTimerRunning = false;
					return;
				}
				$scope.break--;
			}, 1000);
		}
		
		//Reset break
		$scope.resetBreak = function() {
			$scope.breakTimer = true;
			$interval.cancel(startBreakSession);
			$scope.break = 300;
		}
		
	};
	
    angular
        .module('blocTime')
        .controller('TimerCtrl', ['$scope', '$interval', 'Tasks', TimerCtrl]);
})();



