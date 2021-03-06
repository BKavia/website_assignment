(function () {
	form_validation = function () {

		let name = document.getElementById("txtName");
		let email = document.getElementById("txtEmail");
		let subject = document.getElementById("txtSubject");
		let message = document.getElementById("txtMessage");
		let valMessage = document.getElementById("message");
		let submitBtn = document.getElementById("submitBtn");

		submitBtn.addEventListener("click", validate);


		function validate() {
			let hasError = false;
			hasError = validateField(name, valMessage);
			hasError = validateField(email, valMessage);
			hasError = validateField(subject, valMessage);
			hasError = validateField(message, valMessage);


			if (hasError) {
				valMessage.innerHTML = "Please provide all details";
			} else {
				valMessage.innerHTML = "Thanks for your submission.";
				name.value = '';
				email.value = '';
				subject.value = '';
				message.value = '';
			}
		}

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

		function displayError(field, valMessage, isError) {
			if (isError) {
				field.classList.add("error");
				valMessage.classList.add("error_msg");
			} else {
				field.classList.remove("error");
				valMessage.classList.remove("error_msg");
			}
		}



	};



	window.addEventListener("load", form_validation);

})();


var map;

function initMap() {
	var store_location = {
		lat: 52.635829,
		lng: -1.1375853
	};
	map = new google.maps.Map(document.getElementById('map'), {
		center: store_location,
		zoom: 15
	});
	var marker = new google.maps.Marker({
		position: store_location,
		map: map,
		label: "Jewelry Empire",
		animation: google.maps.Animation.DROP
	});
}