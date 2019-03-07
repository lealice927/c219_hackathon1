$(document).ready(startApp);

function startApp() {
    allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
    for (var i = 0; i < allDice.length; i++) {
        var domElement = allDice[i].render();
        $("body").append(domElement);
    }
    new KingOfTokyo();
}

function rollAllDice() {
    for (var diceIndex = 0; diceIndex < allDice.length; diceIndex++) {
        allDice[diceIndex].roll();
    }
}

class Monster {
    constructor(monsterName, image) {
        this.name = monsterName;
        this.image = image;
        this.inTokyo = false;
        this.life = true;
        this.points = {
            health: 10,
            victory: 0,
            bolt: 0
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

    die(attacker) {
        this.life = false;
        this.speak('You died! You were killed by ' + attacker.Monster);
    }
}
var testMonster = new Monster("Cyber Kitty");
var testMonster = new Monster("Space Penguin");
