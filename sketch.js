

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
    
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400, 50, 5000, 50);
    bob1 = new Bob(800, 350, 200);
    bob2 = new Bob(700, 350, 200);
    bob3 = new Bob(900, 350, 200);
    bob4 = new Bob(600, 350, 200);
    bob5 = new Bob(1200, 350, 200);
    rope1 = new Rope(bob1.body, {x:800, y:50});
    rope2 = new Rope(bob2.body, {x:600, y:50});
    rope3 = new Rope(bob3.body, {x:1000, y:50});
    rope4 = new Rope(bob4.body, {x:400, y:50});
    rope5 = new Rope(bob5.body, {x:1200, y:50});
	  Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  drawSprites();
  bob1.display();
  roof.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bob5.body, {x:mouseX, y:mouseY});
}