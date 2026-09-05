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
        this.hit = [];
        this.ships = [];
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
                if (addCell[0] > 9 || addCell[0] < 0) return false;
                if (addCell[1] > 9 || addCell[1] < 0) return false;
                cells.push(addCell);
            }
        
            if (orientation == 'vertical'){
                addCell = [x, y + i];
                if (addCell[0] > 9 || addCell[0] < 0) return false;
                if (addCell[1] > 9 || addCell[1] < 0) return false;
                cells.push(addCell);  
            }
        }

        for (let j = 0; j < cells.length; j++){
            board[cells[j][0]][cells[j][1]] = ship;
        }
            this.ships.push(ship);

        return true
    }

    checkSinkShips (){
        const allShips = this.ships;
        return allShips.every(ship => ship.isSunk())
    }

    receiveAttack(board, x, y){
        const boards = board;
        const cell = boards[x][y];
        const hit = this.hit;

        for (let i = 0; i < hit.length; i++){
            if (hit[i][0] === x && hit[i][1] === y){
                return console.log('its the same');
            } 
        }
            if (cell !== null){
                cell.hit();
                cell.isSunk();
                hit.push([x,y]);
                console.log(hit)
                console.log(`You hit coordinates ${x} ${y}`);
            } else {
                this.miss.push([x,y])
                console.log(`You missed. You hit coordinates ${x} ${y}`);
            }
        }
}

export class Player{
    constructor(type){
        this.type = type;
        this.gameboard = new Gameboard();
    }

    placeComputerShips (){
        let battleship = new Ship (4);
        let cruiser = new Ship (3);
        let destroyer = new Ship (2);
        let submarines = new Ship (1);
        
        const ships = [
            battleship,
            cruiser,
            destroyer,
            submarines
        ]

        const direction = [
            'vertical',
            'horizontal'
        ]
    
        let x;
        let y;

        for (let i = 0; i < ships.length; i++){
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            let randomDir = Math.floor(Math.random() * direction.length);

            while (!this.gameboard.placeShip(ships[i], x, y, direction[randomDir])){
                console.log(`Cannot place ship at coordinates ${x} ${y}`);
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            }
            console.log(`placed ship ${i} at ${x}, ${y}`)
        }
    }
}


// Computer retries — if it randomly picks an already-attacked coordinate, it should try again instead of wasting a turn
// Visual hit/miss feedback — cells should change color when attacked
// Restart game — after game over, player should be able to start fresh
// Human ship placement — currently hardcoded coordinates