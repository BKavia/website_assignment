(function () {
	cartEventHandler = function () {
		//Get all buttons that have the addToCartBtn style applied and register a click event on them.
		let buttons= document.getElementsByClassName("addToCartBtn");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click',handleEvent);
		}
		
		//Increment a product cound variable and under the div content to show number of items in the cart.
		let productCount = 0;
		function handleEvent() {
			productCount++;
			document.getElementById("cartText").innerHTML=productCount;
		}
	};

	//Register a load event to ensure the document is loaded first before binding the button events
	window.addEventListener("load", cartEventHandler);

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