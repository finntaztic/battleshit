import { Ship } from "./gameboard.js";
import { Gameboard } from "./gameboard.js";

let ship;
let gameboard;

beforeEach(() => {
    ship = new Ship();
    gameboard = new Gameboard();
    gameboard.createBoard();
});

test('hit count', () => {
    expect(ship.hit()).toBe(1);
});

test('if sunk', () => {
    ship.length = 4;
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true)
});


test ('if gameboard length is correct', () => {
    expect(gameboard.board.length).toBe(10);    
});

test ('if ships being placed', () => {
    ship = new Ship(5);
    let board = gameboard.board;
    gameboard.placeShip(ship, 2, 7, 'vertical')
    expect(board[2][7]).toBeInstanceOf(Ship)
});

// test ('if ships not being placed when outside of grid', () => {
//     ship = new Ship (5);
//     let board = gameboard.board;
//     // gameboard.placeShip(ship, 2, 7, 'horizontal')
//     expect(console.log(gameboard.placeShip(ship, 2, 7, 'horizontal'))).toBe(
//         [2,7]
//     )
    
// })