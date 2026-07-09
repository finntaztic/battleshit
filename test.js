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

test ('if ships being placed as ship', () => {
    // console.log(gameboard.test)
    ship = new Ship(3);
    let board = gameboard.board;
    gameboard.placeShip(ship, 2, 7, 'vertical')
    expect(board[2][7]).toBeInstanceOf(Ship)
});

test ('if ships out of bounds eventually not place the ship', () => {
    // console.log(gameboard.test)
    ship = new Ship(5);
    let board = gameboard.board;
    gameboard.placeShip(ship, 2, 7, 'vertical')
    expect(board[2][7]).toBe(null)
});

test ('check if receive attack properly add hits to ship', () => {
    ship = new Ship(1);
    let board = gameboard.board;
    gameboard.placeShip(ship, 2, 7, 'vertical');
    gameboard.receiveAttack(2,7);
    expect(board[2][7].hitCount).toBe(1)
    expect(board[2][7].sunk).toBe(true)
})


