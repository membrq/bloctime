(function() {
  function Tasks($firebaseArray) {
	  console.log("here");
	  
	  var ref = firebase.database().ref();
	  
	  var tasks = $firebaseArray(ref);
	  
	  var addTask = function() {
		  
		  tasks.$add({
			  //text: task.addText
			  //$name: "task",
			  //$value: task.addText
			  $value: task 
		  });
		  console.log("hello");
		  var task = null;
	  }

      return {
         all: tasks,
		 addTask: addTask
		 //add: addTask
      };
  }

  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();


//"auth != null"