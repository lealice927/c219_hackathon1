$(document).ready(startApp);

function startApp() {
    allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];     //calling each dice object
    for (var i = 0; i < allDice.length; i++) {                                              //looping through each dice
        var domElement = allDice[i].render();                                               //displaying result for each dice
        $("body").append(domElement);                                                       //appending result to DOM
    }
    $("button").click(rollAllDice);                                                         //click handler for rolling action

    $("img").click(rollAllDice);
    
    $('.insideHeart').text("Health: " + currentMonster.points.health)
    $('.insideVictoryPoint').text("Victory Points: " + currentMonster.points.victory)
    $('.outsideHeart').text("Health: " + opposingMonster.points.health)
    $('.outsideVictoryPoint').text("Victory Points: " + opposingMonster.points.victory)

}

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
   
    if (playerTurn) {
        currentMonster.changeHealth(heart);
        currentMonster.changeVictoryPoints(victoryPoint);
        currentMonster.attack(damage);
    } else {
        opposingMonster.changeHealth(heart);
        opposingMonster.changeVictoryPoints(victoryPoint);
        opposingMonster.attack(damage);
    }

    // console.log("Heart: ", heart);
    // console.log("Damage: ", damage);
    // console.log("Victory Point: ", victoryPoint);
    changeTurns();
    updateStats();
}

function changeTurns() {
    playerTurn = !playerTurn
    
    // // addClass
    // $("button").click(function(){
    //     $(this).toggle(Monster)
}

function updateStats() {
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
        this.domElement = null;
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
        this.changeVictoryPoints(1); 
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
        if (this.points.health >= 10) {
            return;
        } else {
            if ((this.points.health + amount) >= 10) {
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
            if(this.points.victory == 50){
                $('#modal').toggleClass('hide');
 
            }
            console.log(this.name, " You Won")
        }
        return this.points.victory;
    }

    attack(claws) {
        if (playerTurn) {
            opposingMonster.points.health += claws
            if (opposingMonster.points.health <= 0) {
                opposingMonster.die(currentMonster)
            }
        } else {
            currentMonster.points.health += claws
            if (currentMonster.points.health <= 0) {
                currentMonster.die(opposingMonster)
            }
        }

    }

    die(attacker) {
        this.life = false;
        this.speak('You died! You were killed by ' + attacker.Monster);
    }


    win(currentMonster){
        if(currentMonster.points.health <= 0){
            $('#modal').toggleClass('hide');
        } else if
            (currentMonster.points.victory >= 50){
                $('#modal').toggleClass('hide');
            }
            
        }
    }

    render(){
        this.domElement = $("<div>")
        .addClass('front')
        .text('Current Player')
        return this.domElement;
    }
}


var players = [new Monster("Cyber Kitty"), new Monster("Space Penguin")];

var playerTurn = true;
var currentMonster = players[0];
var opposingMonster = players[1];

$(function () {
    $("img").click( function () {
      $("img").toggle()
    })
  });