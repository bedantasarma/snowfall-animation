const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow1, snow2, snow3, snow4;
var backgroundImage, bg;


function preload() {
  backgroundImage = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1200, 1000);

  engine = Engine.create();
  world = engine.world;

  bg = createSprite(600, 500, 50, 50);
  bg.addImage(backgroundImage);
  bg.scale = 1.5;


  snow1 = new Snow(100, 100, 50, 50);
  snow2 = new Snow(600, 150, 50, 50);
  snow3 = new Snow(770, 180, 50, 50);
  snow4 = new Snow(200, 180, 50, 50);
  snow5 = new Snow(1050, 80, 50, 50);
  snow6 = new Snow(380, 100, 50, 50);
  snow7 = new Snow(450, 150, 50, 50);

}

function draw() {
  background(0);

  Engine.update(engine);
  drawSprites();

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();


}