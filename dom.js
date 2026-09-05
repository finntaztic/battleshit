import { Ship } from "./gameboard.js";
import { Gameboard } from "./gameboard.js";
import { GameController } from "./gamecontroller.js";
import { Player } from "./gameboard.js";

// console.log(Player)
const gameController = GameController();

//adding button
const body = document.querySelector('body');
const div = document.createElement('div')
body.append(div);
const btn = document.createElement('button');
btn.textContent = 'New Game'
div.append(btn)

//ships to place
const battleship = new Ship (4);
const cruiser = new Ship (3);
const destroyer = new Ship (2)
const submarines = new Ship (1)

let p1;
let p2;

//players
btn.addEventListener('click', () => {
    body.append(container);
    gameController.newGame();
    p1 = gameController.getPlayer1();
    p2 = gameController.getPlayer2();
    p1.gameboard.createBoard();
    p2.gameboard.createBoard();
    createGrid(p2, p2con, 'p2con');
    p2.placeComputerShips();
    console.log(p2.gameboard);

    p1.gameboard.placeShip(battleship, 2, 6, 'vertical');
    p1.gameboard.placeShip(cruiser, 2, 2, 'horizontal');
    p1.gameboard.placeShip(destroyer, 5, 1, 'horizontal');
    p1.gameboard.placeShip(submarines, 9, 4, 'vertical');
    createGrid(p1, p1con, 'p1con');

    p1.gameboard.checkSinkShips()
});

//adding containers for the div
const container = document.createElement('div');
container.className = 'container'
const p1con = document.createElement('div');
const p2con = document.createElement('div');
container.append(p1con);
container.append(p2con);

//creating grids function
function createGrid (player, container, className){
    const cells = player.gameboard.board;
    container.className = className;

    for (let i = 0; i < cells.length; i++){
        for (let j = 0; j < cells[i].length; j++){
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = [i];
            cell.dataset.col = [j];
            container.append(cell);

            if (cells[i][j] !== null){
                cell.className = 'occupied'
            }
        }
    }
}

function computerAttack (human){
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    human.gameboard.receiveAttack(human.gameboard.board, x, y)
}

//receiveattack event listener
let gameOver = false;

container.addEventListener('click', (e) => {
    if (gameOver) return;
    let currOp = gameController.getCurrentOpponent();
    let currPl = gameController.getCurrentPlayer();
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;
    let currBoardTarget = e.target.parentElement.className;

    if (currPl.type == 'human'&& currBoardTarget == 'p2con'){
        currOp.gameboard.receiveAttack(currOp.gameboard.board, row, col);
        if (currOp.gameboard.checkSinkShips() == true){
            gameOver = true;
            console.log('Human Player wins')
        } else {
            gameController.switchPlayer();
            computerAttack(currOp);

            if (currOp.gameboard.checkSinkShips() == true){
                gameOver = true;
                console.log('Computer Player wins')
            } 
            gameController.switchPlayer()
        }
    } 
});