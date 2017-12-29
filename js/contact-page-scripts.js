"use strict";

(function () {
	let formValidationEventHandler = function () {
		//Get each field from the contacts form
		let name = document.getElementById("txtName");
		let email = document.getElementById("txtEmail");
		let subject = document.getElementById("txtSubject");
		let message = document.getElementById("txtMessage");
		let valMessage = document.getElementById("message");
		let submitBtn = document.getElementById("submitBtn");
		
		//Register a click event to validate for details
		submitBtn.addEventListener("click", validateForm);

		//Function to validate the contacts form
		function validateForm() {
			let hasError = false;
			//Validate each field has a value entered
			hasError = validateField(name, valMessage);
			hasError = validateField(email, valMessage);
			hasError = validateField(subject, valMessage);
			hasError = validateField(message, valMessage);

			//Changes the user massage depending on validation result
			if (hasError) {
				valMessage.innerHTML = "Please provide all details";
			} else {
				valMessage.innerHTML = "Thanks for your submission.";
				//if successful, clear all fields on the form
				name.value = '';
				email.value = '';
				subject.value = '';
				message.value = '';
			}
		}
		
		//Function to validate each field. Takes the field and messageDiv.
		//It highlights the field if it has an error.
		function validateField(field, valMessage) {
			let isFailed = false;
			if (field.value.trim().length == 0) {
				isFailed = true;
				displayError(field, valMessage, true);
			} else {
				displayError(field, valMessage, false);
			}
			return isFailed;
		}
		
		//Function to highlight the field containing the error.
		function displayError(field, valMessage, isError) {
			if (isError) {
				field.classList.add("error");
				valMessage.classList.add("error-msg");
			} else {
				field.classList.remove("error");
				valMessage.classList.remove("error-msg");
			}
		}



	};
	window.addEventListener("load", formValidationEventHandler);

})();



//Initialise the google map
let map;
function initMap() {
	let store_location = {
		lat: 52.635829,
		lng: -1.1375853
	};
	map = new google.maps.Map(document.getElementById('map'), {
		center: store_location,
		zoom: 15
	});
	//Create the google marker. Customised the label and animation.
	let marker = new google.maps.Marker({
		position: store_location,
		map: map,
		label: "Jewelry Empire",
		animation: google.maps.Animation.DROP
	});
}