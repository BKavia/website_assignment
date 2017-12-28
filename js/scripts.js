(function () {

	navigationEventHandler = function () {
		let hamburger = document.getElementById("hamburger");
		let linkMenu = document.getElementById("link-menu");
		
		//Register a click event for the hamburger menu.
		hamburger.addEventListener("click", toggleMenu);
	
		// Menu is hidden at first
		let toggle = true; 
		function toggleMenu() {

			if (toggle) { // if true: make it visible
				linkMenu.classList.add("show-menu"); // add the css class
				toggle = false;
			} else { // if false: make if hidden
				linkMenu.classList.remove("show-menu"); // remove the css class
				toggle = true;
			}
		}
				
	};
	//Register a load event to ensure the document is loaded first before binding the hamburger events
	window.addEventListener("load", navigationEventHandler);

})();