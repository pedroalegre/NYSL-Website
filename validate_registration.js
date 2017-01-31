document.forms.regform.onsubmit =
  function(event) {
    return validateSampleForm(event);
  };

function validateFirstname(firstnameField) {
	if (/^\s*[A-Za-z]+\s*$/.test(firstnameField.value)) {
		return "";
	}
	else {
		return "Please enter a valid First Name with letters.\n";
		
	}
}

function validateLastname(lastnameField) {
	if (/^\s*[A-Za-z]+\s*$/.test(lastnameField.value)) {
		return "";
	}
	else {
		return "Please enter a valid Last Name with letters.\n";
		
	}
}

function validateAddress(addressField) {
	if (/^\s*[0-9]*[A-Za-z]+[0-9]*\s*$/.test(addressField.value)) {
		return "";
	}
	else {
		return "Please enter a valid Street address.\n";
	}
}

function validateCity(cityField) {
	if (/^\s*[A-Za-z]+\s*$/.test(cityField.value)) {
		return "";
	}
	else {
		return "Please enter a City.\n";
	}
}

function validateZip_code(ZIP_codeField) {
	if (/^\s*[0-9]{5}\s*$/.test(ZIP_codeField.value)) {
		return "";
	}
	else {
		return "Please enter a valid ZIP code.\n";
	}
}

function validateBirth_date(birth_dateField) {
	if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(birth_dateField.value)) {
		return "";
	}
	else {
		return "Please enter the player's Birth date.\n";
	}
}

function validateGender() {
	if (document.forms) {
		return "";
	}
	else {
		return "Please enter the player's Birth date.\n";
	}
}

/*
function validateLastname(lastnameField) {
	if (/^\s*[0-9]+\s*$/.test(lastnameField.value)) {
		return "";
	}
	else {
		return "The age field needs a number. \n";
		
	}
}
*/

function validateSampleForm(event) {
  var form = event.target;
  var messages = validateFirstname(form.firstname) + validateLastname(form.lastname) + validateAddress(form.address) + validateCity(form.city) + validateZip_code(form.ZIP_code) + validateBirth_date(form.birth_date) + validateGender(form.gender);
	if (messages === "") {
		return true;
	}
	else {
		alert(messages);
  	return false;
	}
  
}