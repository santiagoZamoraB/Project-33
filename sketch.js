const Engine = Matter. Engine;
const World = Matter. World;
const Bodies = Matter. Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, base;
var object =[];
var k = 580;
var i

var ball;
var resortera;
var gameState;

function setup() {
  createCanvas(1920,1080);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(960, 1060, 1920, 20);
  base = new Ground(1600, 600, 600, 20);
  //object = new Block(1400,560,40,50);
  ball = new Ball(400,250,50);

 

 

  
 

  gameState = "OnSling";

  resortera = new Resortera(ball.body,{x:450, y:250});


  
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  if(i >= 1900){
    k = k - 40;
  }

  for( i = 1300; i <= 1900 && k >= 460 ; i = i + 50){
    object.push(new Block(i, k, 50, 40))
  }
  for(var n = 0; n < object.length; n++){
    object[n].display();
  }
  
  
  //object.display();


  

  ground.display();
  base.display();
  ball.display();
  resortera.display();
  
  console.log(k)
  console.log(i)

  drawSprites();
}

function mouseDragged(){
  
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
  
}
function mouseReleased(){
  resortera.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:400, y:250});
    resortera.attached(ball.body);
  }
}