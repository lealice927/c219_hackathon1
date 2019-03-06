

class Dice{
    constructor(){
        this.availableFaces = [1,2,3,'Fist','Bolt','Heart'];
        this.domElement = null;
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
