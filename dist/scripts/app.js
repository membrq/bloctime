(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
        	.html5Mode({
            	enabled: true,
             	requireBase: false
         	});

		$stateProvider
         	.state('home', {
             	url: '/',
				controller: 'TimerCtrl as home',
             	templateUrl: '/templates/home.html'
         	});
    }

	angular
		.module('blocTime', ['ui.router', 'firebase'])
		.config(config);

})();



//store database reference link in a variable
//grab the data and store it on scope
//maybe 3-way data-bind step

