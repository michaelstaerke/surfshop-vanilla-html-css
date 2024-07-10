/*
@author     MikeS
@date       10.07.2024
*/


const submit = document.getElementById('submit');

// checks if the js variable is connected to the HTML DOM elements
if (submit) {
	
	submit.addEventListener('click', () => {
		
		document.getElementById('submit-text').innerHTML = 
		"<p>Bestellung eingegangen<p>";
		
		// prevents the HTML form from being submitted, 
		// which will also prevent the page from reloading 
		event.preventDefault();
	});
}