
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side1,side2,side3;

function preload(){
	
}

function setup() {
	 createCanvas(1200, 400);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(200, 200, 20);

     ground = new Ground(600, 380, 1200, 25);
  
	 side1 = new Dustbin(890, 318, 20, 100);
     side2 = new Dustbin(1000, 358, 200, 20);
     side3 = new Dustbin(1105, 318, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  side1.display();
  side2.display();
  side3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:75, y: -75})
	}

  }

