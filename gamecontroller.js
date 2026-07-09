import { Player } from "./gameboard";

function GameController(){
    let p1;
    let p2;

    const newGame = () => {
        p1 = new Player('human');
        p2 = new Player('computer');
    }
}