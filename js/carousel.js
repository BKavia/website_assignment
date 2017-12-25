(function () {

	let leftButton = document.getElementById("leftButton");
	let rightButton = document.getElementById("rightButton");

	leftButton.addEventListener("click", moveLeft);
	rightButton.addEventListener("click", moveRight);

	let currentPos = 0;
	let currentIndex = 1;
	let articleWidth = 190;
	let noOfArticles = document.getElementsByClassName("collection-article").length;
	let carouselDiv = document.getElementById("carousel");
	
	function moveLeft() {
		if (currentIndex > 1) {
			currentPos = (currentPos + articleWidth);
			currentIndex--;
		}
		carouselDiv.style.transform = "translateX(" + currentPos + "px)";
	}

	function moveRight() {
		if (currentIndex < noOfArticles) {
			currentPos = (currentPos - articleWidth);
			currentIndex++;
		}
		carouselDiv.style.transform = "translateX(" + currentPos + "px)";
	}

})();