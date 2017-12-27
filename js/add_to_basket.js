(function () {
	button_events = function () {
		let buttons= document.getElementsByClassName("addBtn");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click',handleEvent);
		}
		
		let productCount = 0;
		function handleEvent() {
			productCount++;
			document.getElementById("cartText").innerHTML=productCount;
		}
	};



	window.addEventListener("load", button_events);

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