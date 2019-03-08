$(document).ready(startApp);

function startApp() {
    allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
    for (var i = 0; i < allDice.length; i++) {
        var domElement = allDice[i].render();
        $("body").append(domElement);
    }
    $("button").click(rollAllDice);
    new KingOfTokyo();
}
function rollAllDice() {

    // var results = [];
    // for (var diceIndex = 0; diceIndex < allDice.length; diceIndex++) {        
    //     results.push(allDice[diceIndex].roll());
        
    // }
    var victoryPoint = 0;
    var heart = 0;
    var damage = 0;
    for (var diceIndex = 0; diceIndex < allDice.length; diceIndex++) {        
        var rolledDice = allDice[diceIndex].roll()
        if (rolledDice.points) {
            victoryPoint += rolledDice.points;
        } else if (rolledDice.health > 0) {
            heart += rolledDice.health;
        } else if (rolledDice.health < 0) {
            damage += rolledDice.health;
        }
    }
    $('.heart').text("Health: " + heart);
    $('.victoryPoint').text("Victory Points: " + victoryPoint);

    
    console.log("Heart ", heart);
    console.log("Damage ", damage);
    console.log("Victory Point ", victoryPoint);

    var currentMonster = players[0];
    var opposingMonster = players[1];

    currentMonster.changeHealth(heart);
    currentMonster.changeVictoryPoints(victoryPoint);
    opposingMonster.changeHealth(damage);

    changeTurns();
}

function changeTurns() {
    var next = players.shift();
    players.push(next);
}

class Monster {
    constructor(monsterName, image, inTokyo) {
        this.name = monsterName;
        this.image = image;
        this.inTokyo = inTokyo;
        this.life = true;
        this.points = {
            health: 10,
            victory: 0,
            bolt: 0
        }
        //this.attack = function(){
        //console.log("you got attacked")
        //}
    }

    enterTokyo() {
        if (this.inTokyo) {
            return;
        }
        this.inTokyo = true;
        this.cyberKitty = enterTokyo;
        if (this.diceResult) {
            return;
        }

        this.changeVictoryPoints(diceResult);
        this.changeHealth(0);
        this.attack;
        this.changeVictoryPoints(1); //should only add once a turn
    }

    leaveTokyo() {
        if (this.diceResult) {
            return;
        }
        this.changeHealth(diceResult);
        this.changeVictoryPoints(diceResult);
        this.inTokyo = false;
        this.spacePenguin = inTokyo;
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
// die(attacker) {
//     this.life = false;
//     this.speak('You died! You were killed by ' + attacker.Monster);
// }

var players = [new Monster("Cyber Kitty"), new Monster("Space Penguin")];
