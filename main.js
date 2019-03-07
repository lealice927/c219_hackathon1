$(document).ready(startApp);

var player1;
var player2;

// function startApp() {
//     onedie = new Dice();
//     var a = onedie.render();
//     $('body').append(a);
// }
function startApp() {
    allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
    for (var i = 0; i < allDice.length; i++) {
        var domElement = allDice[i].render();
        $("body").append(domElement);
    }

    landing = new LandingPage();
}

function rollAllDice() {
    for (var diceIndex = 0; diceIndex < allDice.length; diceIndex++) {
        allDice[diceIndex].roll();
    }
}

class Monster {
    constructor(monsterName, image) {
        this.name = monsterName; //is a property of the object, 
        // storage for data of the object, 
        // setting it to local variable called name
        this.image = image;
        this.inTokyo = false;
        this.attack = function(){
            console.log("you got attacked")
        }
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
        this.changeVictoryPoints(1); //should only add once a turn
    }
    leaveTokyo() {
        this.inTokyo = false;
    }
    changeHealth(amount) {
        if (this.inTokyo && amount > 0) {
            console.warn('cannot gain health while in tokyo');
            return ;
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
    changeBoltPoints(amount) {
        this.points.bolt += amount;
        

        

    }
}
var testMonster = new Monster("Cyber Kitty");