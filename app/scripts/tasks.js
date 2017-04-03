(function() {
  function Tasks($firebaseArray) {
	  
	  var ref = firebase.database().ref();
	  
	  var tasks = $firebaseArray(ref);
	  
	  var addTask = function(text) {
		  tasks.$add({
			  list: text,
			  timestamp: Date.now()
		  });
	  }

      return {
         all: tasks,
		 addTask: addTask
      };
  }

  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();


