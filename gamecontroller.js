import { Player } from "./gameboard.js";

export function GameController(){
    let p1;
    let p2;
    let currentPlayer;
    let currentOpponent;

    const newGame = () => {
        p1 = new Player('human');
        p2 = new Player('computer');
        currentPlayer = p1;
        currentOpponent = p2;
        console.log('Current Player: Human');
    }

    const switchPlayer = () => {
        if (currentPlayer == p1){
            currentPlayer = p2;
            currentOpponent = p1;
            console.log('Current Player: Computer')
        } else if (currentPlayer == p2){
            currentPlayer = p1;
            currentOpponent = p2;
            console.log('Current Player: Human')
        }
    }

    const getPlayer1 = () => p1;
    const getPlayer2 = () => p2;
    const getCurrentPlayer = () => currentPlayer;
    const getCurrentOpponent = () => currentOpponent;


    return {
        newGame,
        switchPlayer,
        getPlayer1,
        getPlayer2,
        getCurrentPlayer,
        getCurrentOpponent
    }
}