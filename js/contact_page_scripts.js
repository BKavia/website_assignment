(function () {

	var name = document.getElementById("txtName");
	var email = document.getElementById("txtEmail");
	var subject = document.getElementById("txtSubject");
	var message = document.getElementById("txtMessage");
	var valMessage = document.getElementById("message");
	var submitBtn = document.getElementById("submitBtn");
	
	submitBtn.addEventListener("click", validate);

	
	function validate() {
		var hasError = false; 
		hasError = validateField(name, valMessage);
		hasError = validateField(email, valMessage);
		hasError = validateField(subject, valMessage);
		hasError = validateField(message, valMessage);
		
				
		if (hasError){
			valMessage.innerHTML = "Please provide all details";
		}else{
			valMessage.innerHTML = "Thanks for your submission.";
			name.value = '';
			email.value = '';
			subject.value = '';
			message.value = '';
		}
	}
	
	function validateField(field, valMessage){
		var isFailed = false; 
		if (field.value.trim().length == 0) {
			isFailed = true;
			displayError(field, valMessage, true);
		}else{
			displayError(field, valMessage, false);
		}
		return isFailed;
	}
	
	function displayError(field, valMessage, isError){
		if (isError){
			field.classList.add("error");
			valMessage.classList.add("error_msg");
		}else{
			field.classList.remove("error");
			valMessage.classList.remove("error_msg");
		}
	}

	
	
})();

var map;
function initMap() {
	var store_location = {lat: 52.635829, lng: -1.1375853};
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

