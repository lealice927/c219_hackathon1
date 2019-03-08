// class DiceContainer{
//     constructor(){
//        // this.selectedDice = [];
//         this.Dice = [];
//        // this.rollsRemaining = 3;
//     }
// }
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
        this.availableFaces = [1,2,3,'Fist','Heart']; //took out bolt
        this.domElement = null;
    }
    
    roll(){
        var randomFaceIndex = Math.floor(Math.random() * this.availableFaces.length);
        var randomFace = this.availableFaces[randomFaceIndex];
        this.domElement.text( randomFace );

        console.log(randomFace);
        return randomFace;
        //store information from rolls and send it to "createMonster"
    }
    render(){
        this.domElement = $("<div>")
            .addClass('dice')
            .text('KOT')
        return this.domElement;
    }

    //need to know which monster is the current player
    //so that it sends the output of dice to that monster
    //associate active player w/ monster
}
