// ---------- AJAX CALL ----------
var req = new XMLHttpRequest(); // create an ajax request
var url = 'https://api.svsu.edu/courses?prefix=CS&term=17/FA';
var jsonObj; 
req.onreadystatechange = function() {
	var readyStateDone = 4;
	var readyStatusSuccess = 200;
	if (this.readyState == readyStateDone && 
		this.status == readyStatusSuccess) {
		jsonObj = JSON.parse(this.responseText);
	}
};
req.open('GET', url, true);
req.send();

// ----- WAIT -----
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
   // alert("woke up!");
}
sleep(1000);

// Define the AngularJS Module
var app4 = angular.module('app4', []);

// Define the Controller and implement the Scope
app4.controller('eventCtrl', function($scope) {
 
    // ----- courses code -----
	$scope.courses = jsonObj.courses;
	
});






