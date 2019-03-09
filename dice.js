class Dice{
    constructor(){
        this.availableFaces = [{
            points: 1,
            face: 1
        }, {
            points: 2,
            face: 2
        }, {
            points: 3,
            face: 3
        }, {
            health: -1,
            face: 'Claw'
        }, {
            health: 1,
            face: 'Heart'
        }];
       
        
        this.domElement = null;
    }
    
    roll(){
        var randomFaceIndex = Math.floor(Math.random() * this.availableFaces.length);
        var randomFace = this.availableFaces[randomFaceIndex];
        this.domElement.text( randomFace.face );

        console.log(randomFace);
        return randomFace;
        //store information from rolls and send it to "createMonster"
    }
    render(){
        this.domElement = $("<div>")
            .addClass('dice')
            .text('KoT')
        return this.domElement;
    }

    //need to know which monster is the current player
    //so that it sends the output of dice to that monster
    //associate active player w/ monster
}
