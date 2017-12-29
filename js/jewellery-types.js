"use strict";

(function(){
  // creates a new object called xhr
  // which will handle the API call
  let xhr = new XMLHttpRequest();
 
  
  // constructs the base for the request url
  let baseURL = "https://en.wikipedia.org/w/api.php? \
                format=json& \
                action=query& \
                generator=search& \
                gsrnamespace=0& \
                gsrlimit=10& \
                prop=info|extracts|langlinks|pageimages& \
                inprop=url& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                piprop=thumbnail|name& \
                origin=*& \
 				title=*& \
                gsrsearch=";

  function gatherData(data) {
    // initialise some variables
	let specialistDiv = document.getElementById("specialistDiv");

    let theData = "<strong>Specialists in:</strong></br>";
	let key;
	  //Limit the display information on page
	let maxDisplaySize = 7;
	let titleCount = 0;
    // loop through the result pages by pageid
	theData += "<ul>";
    for(key in data.query.pages) {
		//get only seven titles
		if (titleCount < maxDisplaySize){
			let tmp = data.query.pages[key];
			let title = `${tmp.title}`;
			theData += `<li>${title}</li>`;
			titleCount++;
		}
    }
	theData += "</ul>";
    specialistDiv.innerHTML = theData;
  }

  // the API call is triggered once the user submits a query
  window.addEventListener("load", function(ev){
    // complete the request url
    let wiki = baseURL + "Gold Jewellery";
    // open a connection to the requested API url
    xhr.open("GET", wiki, true);
    // be polite to Wikipedia
    xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
    // send off that request
    xhr.send();
    // if the response was ok, handle the response data using the gatherData function
    xhr.onreadystatechange = function() {
     
      if (xhr.readyState === 4 && xhr.status === 200) {
        // parse the response JSON
        let response = JSON.parse(xhr.responseText);
        // deal with the parsed JSON data
        gatherData(response);
      }
    };
    ev.preventDefault();
  }, false);

}());
