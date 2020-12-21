const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   ground = new Ground(600,height,1200,20)

   box1 = new Box (600,350,50,50);
   box2 = new Box (600,300,50,50);
   box3 = new Box (600,250,50,50);
   box4 = new Box (600,200,50,50);
   box5 = new Box (600,150,50,50);
   
   ball = new Ball (400,200,50,50);
   
   rope = new Rope (ball.body,{x:400,y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ball.display();
    rope.display();
}
function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}