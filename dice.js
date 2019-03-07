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
class Dice{
    constructor(){
        this.availableFaces = [1,2,3,'Fist','Bolt','Heart'];
        this.domElement = null;
       // this.dice.push( selectedDice );
    }
    roll(){
        var randomFaceIndex = Math.floor(Math.random() * this.availableFaces.length);
        var randomFace = this.availableFaces[randomFaceIndex];
        this.domElement.text( randomFace );

    }
    render(){
        this.domElement = $("<div>")
            .addClass('dice')
            .text('?')
        return this.domElement;
    }
}

// class RollsRemaining{
//     constructor(){

//     }
// }

