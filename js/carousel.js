"use strict";
// Used only on the home page to move the product carousel
(function () {
	let carouselEventHandler = function () {

		let leftButton = document.getElementById("leftButton");
		let rightButton = document.getElementById("rightButton");
		//Register events for the left and right buttons;
		leftButton.addEventListener("click", moveLeft);
		rightButton.addEventListener("click", moveRight);

		//Initialise variables needed.
		let currentPos = 0;
		let currentIndex = 1;
		let articleWidth = 190;
		let noOfArticles = document.getElementsByClassName("collection-article").length;
		let carouselDiv = document.getElementById("carousel");

		//Function to move carousel to left by adding to the X-axis position.
		function moveLeft() {
			if (currentIndex > 1) {
				currentPos = (currentPos + articleWidth);
				currentIndex--;
			}
			carouselDiv.style.transform = "translateX(" + currentPos + "px)";
		}

		//Function to move carousel to right by removing from the X-axis position.
		function moveRight() {
			if (currentIndex < noOfArticles) {
				currentPos = (currentPos - articleWidth);
				currentIndex++;
			}
			carouselDiv.style.transform = "translateX(" + currentPos + "px)";
		}

	};
	//Register a load event to ensure the document is loaded first before binding the carousel events
	window.addEventListener("load", carouselEventHandler);

})();