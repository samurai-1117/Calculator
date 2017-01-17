<<<<<<< HEAD
// JavaScript Document
=======
// JavaScript Document// JavaScript Document
>>>>>>> version1.1


//  Change Display
function d(val) {
	document.getElementById("d"). value = val;
}

//  Type numbers and operators
function v(val) {
	document.getElementById("d"). value += val;
}

// Evalueate the equation
function e(val) {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
<<<<<<< HEAD
}
=======
}

//decimal places
>>>>>>> version1.1
