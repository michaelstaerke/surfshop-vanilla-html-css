/*
@author     MikeS
@date       14.07.2024
*/


const submitOrder = document.getElementById('submit-order');
const submitContact = document.getElementById('submit-contact');

window.addEventListener("load", function() 
{
	submitOrder.addEventListener("click", function() 
	{
		saveDataOrder();
		alert("Bestellung eingegangen. \n " 
				+boardModelTxt, +boardsAmount, +boardSize, +boardOrderEmail);
	}, false);

	submitContact.addEventListener("click", function() 
	{
		saveDataContact();
		alert("Kontakt Nachricht eingegangen.");
	}, false);
});

function saveDataOrder() 
{
	var boardModel = document.getElementById("board-picked-model").value;
	var boardModelTxt = boardModel.options[e.selectedIndex].text;
	var boardsAmount = document.getElementById("boards-amount").value;
	var boardSize = document.getElementById("board-picked-size").value;
	var boardOrderEmail = document.getElementById("board-order-email").value;
}

function saveDataContact()
{
	var name = document.getElementById("name").value;
    var email = document.getElementById("email").value; 
	/*  localStorage.setItem("formContactValue1", name); */
};