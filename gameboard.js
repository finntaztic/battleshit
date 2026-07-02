export class Ship {
    constructor (length){ 
        this.length = length;
        this.hit = 0;
        this.sunk = false;
    }

    addHit(){
        return ++this.hit;
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