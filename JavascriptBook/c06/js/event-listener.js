function checkUsername() {                             // Declare function
  var elem = this.id;
  var num = elem.substring(elem.length-1);
  var output = "feedback" + num;
  var elMsg = document.getElementById(output);     // Get feedback element
  var letter = this.value[0].toUpperCase();
  if (this.value.length < 5) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more\n'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
  switch(elem) {
	case "username1":
		var valid = ['A','B','C'];
		if(letter == valid[0] || letter == valid[1] || letter == valid[2]) {
		} else {
			elMsg.textContent += 'Username must start with A, B, C';
		}
	break;
	case "username2":
		var valid = ['D','E','F','G','H'];
		if(letter == valid[0] || letter == valid[1] || letter == valid[2] || letter == valid[3] || letter == valid[4]) {
		} else {
			elMsg.textContent += 'Username must start with D, E, F, G, H';
		}
	break;
	case "username3":
		var valid = ['I','J','K','L','M'];
		if(letter == valid[0] || letter == valid[1] || letter == valid[2] || letter == valid[3] || letter == valid[4]) {
		} else {
			elMsg.textContent += 'Username must start with I, J, K, L, M';
		}
	break;
	case "username4":
		var valid = ['N','O','P'];
		if(letter == valid[0] || letter == valid[1] || letter == valid[2]) {
		} else {
			elMsg.textContent += 'Username must start with N, O, P';
		}
	break;
	case "username5":
		var valid = ['Q','R','S','T','U','V','W','X','Y','Z'];
		if(letter == valid[0] || letter == valid[1] || letter == valid[2] || letter == valid[3] || letter == valid[4] || letter == valid[5] || letter == valid[6] || letter == valid[7] || letter == valid[8] || letter == valid[9]) {
		} else {
			elMsg.textContent += 'Username must start with Q, R, S, T, U, V, W, X, Y, Z';
		}
	break;
  }
}

var elUsername = document.getElementById('username1');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
var elUsername = document.getElementById('username2');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
var elUsername = document.getElementById('username3');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
var elUsername = document.getElementById('username4');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
var elUsername = document.getElementById('username5');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);