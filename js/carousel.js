
(function () {

	let leftButton = document.getElementById("leftButton");
	let rightButton = document.getElementById("rightButton");

	leftButton.addEventListener("click", moveLeft);
	rightButton.addEventListener("click", moveRight);
	
	let currentPos = 0;
	let containerWidth = document.getElementById("carousel_container").offsetWidth;
	let carouselDiv = document.getElementById("carousel");

	function moveLeft(){
	  if (containerWidth >= currentPos ){
		  currentPos = (currentPos + 100);
		  carouselDiv.style.transform = "translateX("+currentPos+"px)";
	 }
	}

	function moveRight(){
	  currentPos = (currentPos - 100);
	  if (currentPos < -containerWidth ){
			currentPos = -containerWidth;
	  }
	  carouselDiv.style.transform = "translateX("+currentPos+"px)";
	 }
	
 })();