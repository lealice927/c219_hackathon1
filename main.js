$(document).ready(startApp);


class Monster {
    constructor(monsterName, image) {
        this.name = monsterName; //is a property of the object, 
        // storage for data of the object, 
        // setting it to local variable called name
        this.image = image;
        this.inTokyo = false;
        this.points = {
            health: 10,
            victory: 0,
            electricity: 0
        }
    }
    enterTokyo() {
        if (this.inTokyo) {
            return;
        }
        this.inTokyo = true;
        this.changeVictoryPoints(1);
    }
    leaveTokyo() {
        this.inTokyo = false;
    }
    changeHealth(amount) {
        if (this.inTokyo && amount > 0) {
            console.warn('cannot gain health while in tokyo');
            return;
        }
        this.points.health += amount;
        if (this.points.health < 0) {
            this.points.health = 0;
        }
        else if (this.points.health > 10) {
            this.points.health = 10;
        }
    }
    changeVictoryPoints(amount) {
        this.points.victory += amount;
        if (this.points.victory > 20) {
            this.points.victory = 20;
        } else if (this.points.victory < 0) {
            this.points.victory = 0;
        }
        return this.points.victory;
    }
}
var testMonster = new Monster("Cyber Kitty");
