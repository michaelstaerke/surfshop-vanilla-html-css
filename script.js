/*
=============================
@author     MikeS			=
@date       22.07.2024		=
=============================
*/


"use strict";

//const submitOrder = document.getElementById('submit-order');
//const submitContact = document.getElementById('submit-contact');

const submitOrder = document.querySelector("submit-order");
const submitContact = document.querySelector("submit-contact");


submitOrder.addEventListener("click", (event) => 
{
	saveDataOrder();
	alert("Bestellung lautet: \n "+boardModelTxt, +boardsAmount, +boardSize, +boardOrderEmail);
});

submitContact.addEventListener("click", (event) => 
{
	saveDataContact();
	alert("Kontakt Nachricht eingegangen.");
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