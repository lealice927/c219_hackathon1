
class KingOfTokyo {
    constructor() {

        this.insideTokyoElement = $(".insideTokyo");
        this.outsideTokyoElement = $(".outsideTokyo");
        this.monsterElements = [];
        this.monsterStorage = [];
        this.monsterLocation = {
            inside: [],
            outside: []
        }
        //domelement for inside tokyo
        //domelement for tokyobay
        //domelement for outside tokyo
        //array to store monsters
        // property array  to store monster in tokyo
        //array to store monster outside of tokyo
    }
    displayMonsterStats() {
    console.log('Display Stats:', displayMonsterStats);
    $('.health .value').text(health);
    $('.victory .value').text(victory);

    //this all will tie in w/ dice results
        //if monster takes damage, decrement health
        //else monster rolls hearts, increment health

        //if monster rolls 1,2,3... adds to victory points

        //need to store the result o
    }

    createMonster(monsterName) {
        var newMonster = new Monster();
        this.monsterStorage.push(newMonster);
        this.monsterLocation.outside.push(newMonster);
        render();
        //take in stats of monster
        //create monster obj
        //add monster to monster list/storage
        //add monster to outside tokyo list
        //call monster's render method, & place html to domelement & append it
    }
    render() {
        for (var i = 0; i < this.monsterStorage.length; i++) {
            var currentMonster = this.monsterStorage[i];
            var monster = $("<div>")
                .addClass('monster')
                .text(currentMonster.name);
            var monsterImage = $("<img>").attr('src', currentMonster.image);
            monster.append(monsterImage);
            this.monsterElements.push(monster);
            $("body").append(monster);
        }
        return this.domElement;
    }

    moveMonsterToTokyo() {
        //take in which monster to move
        //add monster to tokyo if there is room
        //remove monster from outside tokyo
        //get monster's render method(result) & place in tokyo circle
    }
}

