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
        if (this.length <= this.hit){
            return this.sunk = true;
        } else return this.sunk = false;
    }
}

export class Gameboard{
    addShip(){
        
    }
}