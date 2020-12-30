const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 20);

	stone = new Stone(200, 400, 50);
}


function draw() {
  Engine.update(engine);
  background(255, 255, 255);

  ground.display();

  stone.display();
  
  drawSprites();
}



