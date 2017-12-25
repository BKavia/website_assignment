
(function () {

	let leftButton = document.getElementById("leftButton");
	let rightButton = document.getElementById("rightButton");

	leftButton.addEventListener("click", moveLeft);
	rightButton.addEventListener("click", moveRight);
	
	let currentPos = 0;
	let containerWidth = document.getElementById("carousel_container").offsetWidth;
	let carouselDiv = document.getElementById("carousel");
	let carouselDivLeft = document.getElementById("carousel").offsetLeft;
	
	function moveLeft(){
		  console.log("left",currentPos, carouselDivLeft);
		  
		  //if (currentPos <= 0){
		//	  currentPos = 0;
		 // }else{
			  currentPos = (currentPos + 190);
		 // }
		  
		  carouselDiv.style.transform = "translateX("+currentPos+"px)";
	}

	function moveRight(){
		    console.log(currentPos, carouselDivLeft);
	
	  currentPos = (currentPos - 190);
	  if (currentPos < -containerWidth ){
			currentPos = -containerWidth;
	  }
	  carouselDiv.style.transform = "translateX("+currentPos+"px)";
	 }
	
 })();