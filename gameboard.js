export class Ship {
    constructor (length, hit, isSunk){ //i added miss but it wouldnt be right, thats board
        this.length = length;
        this.hit = hit;
        this.isSunk = isSunk;
    }

    receiveAttack(){
        return this.hit ++;
    }

    isSunk(){
        if (this.length <= this.hit){
            return this.isSunk = true;
        } else return this.isSunk = false;
    }
}

