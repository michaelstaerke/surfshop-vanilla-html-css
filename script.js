/*
@author     MikeS
@date       14.07.2024
*/
 
const submit = document.getElementById('submit');
const submitContact = document.getElementById('submitContact');

if (submit) {
	
	submit.addEventListener('click', () => {
		
		document.getElementById('submit-text').innerHTML = 
		"<p>Bestellung eingegangen<p>";
		
		// prevents the HTML form from being submitted, 
		// which will also prevent the page from reloading 
		event.preventDefault();
	});
}

function sendContactData()
{
    //gettting the values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value; 
    //saving the values in local storage
    localStorage.setItem("formContactValue1", email);
    localStorage.setItem("formContactValue2, password);
}