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

}

var playerTurn = true;

function rollAllDice() {

    var victoryPoint = 0;
    var heart = 0;
    var damage = 0;
    for (var diceIndex = 0; diceIndex < allDice.length; diceIndex++) {        
        var rolledDice = allDice[diceIndex].roll();
        console.log('Rolled dice: ', rolledDice);
        if (rolledDice.points) {
            victoryPoint += rolledDice.points;
        } else if (rolledDice.health > 0) {
            heart += rolledDice.health;
        } else if (rolledDice.health < 0) {
            damage += rolledDice.health;
        }
    }

    console.log('Rolled Dice Heart: ', heart)
    console.log('Rolled Dice Damage: ', damage)
    console.log('Rolled Dice victoryPoint: ', victoryPoint)

    //do a conditional here?
    //change/add additional class condition for players

    
    var currentMonster = players[0];
    var opposingMonster = players[1];

    if (playerTurn){
        currentMonster.changeHealth(heart);
        currentMonster.changeVictoryPoints(victoryPoint);
        currentMonster.attack(damage);
    } else {
        opposingMonster.changeHealth(heart);
        opposingMonster.changeVictoryPoints(victoryPoint);
        opposingMonster.attack(damage);
    }

    console.log("Heart: ", heart);
    console.log("Damage: ", damage);
    console.log("Victory Point: ", victoryPoint);
    changeTurns();
    updateStats();
}

function changeTurns() {
    playerTurn = !playerTurn
   
}

function updateStats(){
    
    $('.insideHeart').text("Health: " + currentMonster.points.health)
    $('.insideVictoryPoint').text("Victory Points: " + currentMonster.points.victory)
    $('.outsideHeart').text("Health: " + opposingMonster.points.health)
    $('.outsideVictoryPoint').text("Victory Points: " + opposingMonster.points.victory)
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
        if(this.points.health >=  10){
            break;
        } else {
            if ((this.points.health + amount) >= 10){
                this.points.health = 10;
            } else {
                this.points.health += amount
            }
        }
    }

    changeVictoryPoints(amount) {
        this.points.victory += amount;
        if (this.points.victory > 50) {
            this.points.victory = 50;
            console.log(this.name, " You Won")
        } 
        return this.points.victory;
    }

    attack(claws){
        if (playerTurn){
            opposingMonster.points.health -= claws
            if(opposingMonster.points.health <= 0 ){
                opposingMonster.die()
            }
        } else {
            currentMonster.points.health -= claws
            if(currentMonster.points.health <= 0 ){
                currentMonster.die()
            }
        }
        
    }

    die(attacker) {
        this.life = false;
        this.speak('You died! You were killed by ' + attacker.Monster);
    }

}
var players = [new Monster("Cyber Kitty"), new Monster("Space Penguin")];
