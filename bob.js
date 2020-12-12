

class Bob{
 constructor(x, y, r){
    var bobOptions={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    };

    this.body = Bodies.rectangle(x, y, r, r, bobOptions);
    this.r = r;
    World.add(world, this.body);
 }
 
 display()
 {
    var bobPos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(bobPos.x, bobPos.y);
    rotate(angle);
    fill("red");
    ellipseMode(CENTER);
    ellipse(0, 0, this.width, this.height);
    pop();
 }
}