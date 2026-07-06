export class Ship {
    constructor (length){ 
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
    }

    hit(){
        return ++this.hitCount;
    }

    isSunk(){
        if (this.length <= this.hitCount){
            return this.sunk = true;
        } else return this.sunk = false;
    }
}

export class Gameboard{
    constructor(){
        this.row = 10;
        this.col = 10;
        this.board = [];
    }

    createBoard(){
        for (let i = 0; i < this.row; i++){
            let rows = [];
            for (let j = 0; j < this.col; j++){
                rows.push(null)
            }
            this.board.push(rows)
        }
    }

    placeShip(ship, x, y, orientation){
        let board = this.board;
        let addCell;
        const length = ship.length;
        const cells = []

        for (let i = 0; i < length; i++){
            if (orientation == 'horizontal'){
                addCell = [x + i, y]
                if (addCell[0] > 9 || addCell[0] < 0) return;
                // else board[addCell[0]][addCell[1]] = ship;
                console.log(addCell)
            } else if (orientation == 'vertical'){
                addCell = [x, y + i]
                if (addCell[1] > 9 || addCell[1] < 0) return;
                // else board[addCell[0]][addCell[1]] = ship;
                console.log(addCell)
            } 
        }
        return board[addCell[0]][addCell[1]]
        // return addCell
    }
    }

    //problem with this code is it still logs other cells. we wanna kill it immedietely
    //perhaps adding the condition from the very start