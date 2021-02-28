const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
  wall1 = new Wall(600,400,200,10);
  wall2 = new Wall(1100,400,200,10);

  Engine.run(engine);
  
  blueBlock6 = new Blue(540,362,20,60);
  blueBlock3 = new Blue(560,362,20,60);
  blueBlock4 = new Blue(580,362,20,60);
  blueBlock1 = new Blue(600,362,20,60);
  blueBlock2 = new Blue(620,362,20,60);
  blueBlock5 = new Blue(640,362,20,60);
  blueBlock7 = new Blue(660,362,20,60);

  pinkBlock3 = new Pink(560,300,20,60);
  pinkBlock2 = new Pink(580,300,20,60);
  pinkBlock1 = new Pink(600,300,20,60);
  pinkBlock4 = new Pink(620,300,20,60);
  pinkBlock5 = new Pink(640,300,20,60);

  greenBlock2 = new Green(580,239,20,60);
  greenBlock1 = new Green(600,239,20,60);
  greenBlock3 = new Green(620,239,20,60);

  blakBlock1 = new Black(600,180,20,60);

  

  
  blueBlock62 = new Blue(1040,362,20,60);
  blueBlock32 = new Blue(1060,362,20,60);
  blueBlock42 = new Blue(1080,362,20,60);
  blueBlock12 = new Blue(1100,362,20,60);
  blueBlock22 = new Blue(1120,362,20,60);
  blueBlock52 = new Blue(1140,362,20,60);
  blueBlock72 = new Blue(1160,362,20,60);

  pinkBlock32 = new Pink(1060,300,20,60);
  pinkBlock22 = new Pink(1080,300,20,60);
  pinkBlock12= new Pink(1100,300,20,60);
  pinkBlock42 = new Pink(1120,300,20,60);
  pinkBlock52 = new Pink(1140,300,20,60);

  greenBlock22 = new Green(1080,239,20,60);
  greenBlock12 = new Green(1100,239,20,60);
  greenBlock32 = new Green(1120,239,20,60);

  blakBlock12 = new Black(1100,180,20,60);

  
  octogon = new Octogon(300,300,5,10)
  

  rope = new Rope(octogon.body, {x:300,y:300});

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  fill(0,0,0)
  wall1.display();
  wall2.display();
  fill(0,255,237)
  blueBlock1.display(); 
  blueBlock2.display();
  blueBlock3.display();
  blueBlock4.display();
  blueBlock5.display();
  blueBlock6.display();
  blueBlock7.display();

  blueBlock12.display(); 
  blueBlock22.display();
  blueBlock32.display();
  blueBlock42.display();
  blueBlock52.display();
  blueBlock62.display();
  blueBlock72.display();

  fill(255,0,250)
  pinkBlock1.display();
  pinkBlock3.display();
  pinkBlock2.display();
  pinkBlock1.display();
  pinkBlock4.display();
  pinkBlock5.display();

  pinkBlock12.display();
  pinkBlock32.display();
  pinkBlock22.display();
  pinkBlock12.display();
  pinkBlock42.display();
  pinkBlock52.display();
  fill(16,255,0)
  greenBlock2.display();
  greenBlock1.display();
  greenBlock3.display();

  greenBlock22.display();
  greenBlock12.display();
  greenBlock32.display();
  fill(255,255,255)
  blakBlock1.display();

  blakBlock12.display();
  fill(0,0,0)
  octogon.display();

  rope.display();
  //drawSprites();
}

function  mouseDragged() {
	Matter.Body.setPosition(octogon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope.hi()
}
