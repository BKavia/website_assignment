(function(){

  var hamburger = document.getElementById("hamburger");
  var linkMenu = document.getElementById("link-menu");

  hamburger.addEventListener("click", toggleMenu);

  var toggle = true; // hidden at first
  function toggleMenu(){
	 
    if (toggle) { // true: it's visible
     linkMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
     linkMenu.classList.add("show-menu"), // show it
     toggle = true
    }
  }

})();