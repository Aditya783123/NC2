

class Roof {
    constructor(x,y,width, height){
    var roofOptions = {
        isStatic:true
    };
    this.body = Bodies.rectangle(x,y,width,height, roofOptions); 
    this.height = height;
    this.width = width;
    World.add(world, this.body);
    }
    
    display(){
    var roofPos = this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(roofPos.x, roofPos.y, this.width, this.height);
    }
    
}