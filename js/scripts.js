(function () {

	nav_script = function () {
		let hamburger = document.getElementById("hamburger");
		let linkMenu = document.getElementById("link-menu");

		hamburger.addEventListener("click", toggleMenu);

		let toggle = true; // hidden at first
		function toggleMenu() {

			if (toggle) { // true: it's visible
				linkMenu.classList.remove("hide-menu"), linkMenu.classList.add("show-menu"), // show it
					toggle = false
			} else { // false: it's hidden
				linkMenu.classList.remove("show-menu"), linkMenu.classList.add("hide-menu"), // hide it
					toggle = true
			}
		}

	};
	window.addEventListener("load", nav_script);

})();