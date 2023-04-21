/*
L'utente clicca su un bottone che genererà
una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro
ed emetto un messaggio in console
con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione
che fornisca una scelta tra tre diversi livelli di difficoltà:
- 	con difficoltà 1 => 100 caselle,
	con un numero compreso tra 1 e 100,
	divise in 10 caselle per 10 righe;
-	con difficoltà 2 => 81 caselle,
	con un numero compreso tra 1 e 81,
	divise in 9 caselle per 9 righe;
-	con difficoltà 3 => 49 caselle,
	con un numero compreso tra 1 e 49,
	divise in 7 caselle per 7 righe;
*/

// declare global DOM variables
const playBtn = document.querySelector("#play");
const grid = document.querySelector(".grid");
const difficultySelect = document.querySelector("#difficulty");

// add event listener to play button
// all code will be inside that
playBtn.addEventListener('click',
	function () {
		grid.innerHTML = '';
		let gridSize;
		let cellCount;

		// define grid dimension based on selection
		switch (difficultySelect.value) {
			case '1':
				gridSize = 10;
				cellCount = 100;
				break;
			case '2':
				gridSize = 9;
				cellCount = 81;
				break;
			case '3':
				gridSize = 7;
				cellCount = 49;
				break;
			default:
				gridSize = 10;
				cellCount = 100;
		}