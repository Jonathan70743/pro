var PLAY = 1;
var END = 0;
var gameState = PLAY;
var car1
var car2

var airfield



function preload(){
  go_image = loadImage("go.png")
  flag_image = loadImage("flag.png")
  car1_Image = loadImage("bugatti.png");
  car2_Image = loadImage("lamborghini.png");
  airfield = loadImage("airfield.jpeg")
  one_image= loadImage("1.png")
  two_image = loadImage("2.webp")
  three_image = loadImage("3.png")
cup_image = loadImage("cup.png")
}

function setup() {
  createCanvas(1500, 800);
  flag = createSprite(700,100,20,80)
  car1 = createSprite(200,600,20,80);
  car2 = createSprite(1100,630,20,80);
  three = createSprite(500,300,20,80)
  two = createSprite(700,300,20,80)
  one = createSprite(900,300,20,80)
  go = createSprite(700,450,20,80)
 cup = createSprite(700,615,20,80)
  car1.addImage(car1_Image);
  car2.addImage(car2_Image);
  flag.addImage(flag_image)
  one.addImage(one_image)
  cup.addImage(cup_image)
  two.addImage(two_image)
  three.addImage(three_image)
  go.addImage(go_image)
  car1.scale = 0.23
  car2.scale = 0.37
cup.scale = 0.5
one.scale = 0.1
two.scale = 0.1
three.scale = 0.1
go.scale = 0.2
flag.scale = 0.1
  } 
  
  
  
  // create Obstacles and Cloud groups
 

function draw() {
  background(airfield);
  text();
  
  
 
  
  //spawn obstacles on the ground
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}

