const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bird, pig, ground, link;

let engine;
let world;

function setup() 
{

  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  bird=new Bird(50,50);
  pig=new Pig(300,20);
  link=new Link(bird,{
    x:50,y:50
  });

  ground= new Ground(250,690,500,10);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  bird.display()
  pig.display();
   
}




