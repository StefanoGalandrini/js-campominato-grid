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

// add event listener to play button
// all code will be inside that
playBtn.addEventListener("click", function () {
	grid.innerHTML = "";
	const difficultyLevel = document.querySelector("#difficulty").value;

	// build grid creating html elements
	gridDimension(difficultyLevel);
	let cellCount = totalCells;
	let cellSize = Math.sqrt(totalCells);
	const dimCell = cellDimension(cellSize);

	for (let i = 1; i <= cellCount; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.style.width = `${dimCell}px`;
		cell.style.height = `${dimCell}px`;
		cell.innerHTML = i;

		cell.addEventListener("click", function () {
			cell.classList.toggle("selected");
			console.log(`Hai cliccato sulla casella ${i}`);
		});

		grid.appendChild(cell);
	}
});

function gridDimension(level) {
	// define grid dimension based on selection
	switch (level) {
		case "1":
			totalCells = 100;
			break;
		case "2":
			totalCells = 81;
			break;
		case "3":
			totalCells = 49;
			break;
		default:
			totalCells = 100;
	}
	return totalCells;
}

function cellDimension(dim) {
	const dimCell = (640 - 2 * 4) / dim;
	return dimCell;
}
