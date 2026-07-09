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
        this.miss = [];
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
                addCell = [x + i, y];
                if (addCell[0] > 9 || addCell[0] < 0) return;
                if (addCell[1] > 9 || addCell[1] < 0) return;
                cells.push(addCell);
            }
            if (orientation == 'vertical'){
                addCell = [x, y + i];
                if (addCell[0] > 9 || addCell[0] < 0) return;
                if (addCell[1] > 9 || addCell[1] < 0) return;
                cells.push(addCell);  
            }
        }
        for (let j = 0; j < cells.length; j++){
                board[cells[j][0]][cells[j][1]] = ship;
        }
    }

    receiveAttack(x,y){
        const board = this.board;
        const cell = board[x][y]
        if (cell !== null){
            cell.hit()
            cell.isSunk();
        } else this.miss.push([x,y]); //add coordinates instead of coordinate address
    }
}

export class Player{
    constructor(type){
        this.type = type;
        this.gameboard = new Gameboard();
    }
}