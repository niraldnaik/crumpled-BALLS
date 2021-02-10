
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cpaper,ground;
var db1,db2,db3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
	 cpaper=new Paper(100,50,30)
	 ground=new Ground(400,600,800,20)
	 db1=new Dustbin(500,540,20,100)
	 db2=new Dustbin(700,540,20,100)
	 db3=new Dustbin(600,590,220,20)

	Engine.run(engine);
	
}


function draw() {
	keyPressed();
  rectMode(CENTER);
  background(0);
  cpaper.show();
  ground.show()
  db1.show();
db2.show();
db3.show();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {

	  Matter.Body.applyForce(cpaper.body,cpaper.body.position,{x:1,y:-2});
  
	}

if (keyCode == DOWN_ARROW) {

	Matter.Body.applyForce(cpaper.body,cpaper.body.position,{x:0,y:2});

  }
}













