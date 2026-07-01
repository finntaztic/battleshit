import { Ship } from "./gameboard.js";

let ship;

beforeEach(() => {
    ship = new Ship();
})

test('hit count', () => {
    expect(ship.addHit()).toBe(1);
})

test('if sunk', () => {
    ship.length = 4;
    ship.addHit();
    ship.addHit();
    ship.addHit();
    ship.addHit();
    expect(ship.isSunk()).toBe(true)
})
