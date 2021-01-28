const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var board;


function preload(){
  board=loadImage("bg.jpeg");
}

function setup() {
  createCanvas(800,725);

  engine=Engine.create();
  world=engine.world;

  engine.world.gravity.y=0;
  purple=new Purple(110,515,60,60);
   
 // golden=new Golden(110,515,60,60);


}

function draw() {
  background("black");  
  Engine.update(engine);

  image(board,0,0,800,600);

  purple.display();
 // golden.display();


}