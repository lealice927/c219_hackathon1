class DiceContainer{
    constructor(){
       // this.selectedDice = [];
        this.Dice = [];
       // this.rollsRemaining = 3;
    }
}
//use push method to send dice to selected dice
// class SelectedDice{
//     constructor(){
//        return this.selectedDice.add( randomFace );
//     }
// }
// var faceValue = this.availableFaces;
//     this.fist = attack(-1);
//     this.heart = heal(1);
//     this.


class Dice{
    constructor(){
        this.availableFaces = [1,2,3,'Fist','Heart'];
        this.domElement = null;
        //this.dice.push( selectedDice );
    }
    
    roll(){
        var randomFaceIndex = Math.floor(Math.random() * this.availableFaces.length);
        var randomFace = this.availableFaces[randomFaceIndex];
        this.domElement.text( randomFace );

    }
    render(){
        this.domElement = $("<div>")
            .addClass('dice')
            .text('KOT')
        return this.domElement;
    }
}

// class RollsRemaining{
//     constructor(){

//     }
// }

