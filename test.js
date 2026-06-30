import { Ship } from "./gameboard.js";

let ship = Ship();
test('hit count', () => {
    expect(ship.hit()).toBe(1)
})