$(document).ready(startApp);

// make a global flag for player turn
// run dice roll function, grab the numbers and do associated actions to opposing player
// for health, make conditional 
// deal dmg to opposing player
// sum of dice will add to victory points 
// health and victory points are intrinsic properties of the monsters so grab their current values +/- dice values and then update inside/outside tokyo display stats

function startApp() {
    allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
    for (var i = 0; i < allDice.length; i++) {
        var domElement = allDice[i].render();
        $("body").append(domElement);
    }
    $("button").click(rollAllDice);
    var currentMonster = players[0];
    var opposingMonster = players[1];
    
    $('.insideHeart').text("Health: " + currentMonster.points.health)
    $('.insideVictoryPoint').text("Victory Points: " + currentMonster.points.victory)
    $('.outsideHeart').text("Health: " + opposingMonster.points.health)
    $('.outsideVictoryPoint').text("Victory Points: " + opposingMonster.points.victory)

  //  new KingOfTokyo();
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

    //do a conditional here?
    //change/add additional class condition for players

// debugger;
    // $('.currentMonster .heart').text('Health: ' + heart);
    // $('.opposingMonster .heart').text('Health: ' + heart);
    // $('.currentMonster .victoryPoint').text('Victory Point: ' + victoryPoint);
    // $('.opposingMonster .victoryPoint').text('Victory Point: ' + victoryPoint);
    
    var currentMonster = players[0];
    var opposingMonster = players[1];

  //  $('.heart').text("Health: " + heart);
  //  $('.victoryPoint').text("Victory Points: " + victoryPoint);

    
    console.log("Heart: ", heart);
    console.log("Damage: ", damage);
    console.log("Victory Point: ", victoryPoint);

   

   
   // opposingMonster.changeHealth(damage);

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
        }
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
            // console.warn('cannot gain health while in tokyo');
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
        if (this.points.victory > 50) {
            this.points.victory = 50;
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
var players = [new Monster("Cyber Kitty"), new Monster("Space Penguin")];
