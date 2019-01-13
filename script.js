/**
 * El código se dividirá en 4 partes:
 * 1. Formato del juego normalmente.
 * 2. ¿Cómo determino a un ganador?
 * 3. Crear una IA básica y un anuncio del ganador.
 * 4. Utilizar el algoritmo Minimax.
 *
 * Fuentes bibliográficas:
 * https://es.wikipedia.org/wiki/Minimax
 * https://medium.freecodecamp.org/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37 
 */

var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2],
];

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none";
	origBoard = Array.from(Array(9).keys());
	// console.log(origBoard);
	for (let i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square) {
	turn(square.target.id, huPlayer);
}

function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
}