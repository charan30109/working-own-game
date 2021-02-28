
var house;
var background1;
var houseimg;
var apple;
var appleimg;
var seed1;
var seed2;
var seed3;
var seedimg;
var carrot;
var carrotimg;
var cucu;
var cucuimg;
var choice;
var coins=25;
var gamestate=0;
function preload(){
background1=loadImage("images/farm_land.png");
houseimg=loadImage("images/house.jpeg");
appleimg=loadImage("images/apple.png");
seedimg=loadImage("images/seed.jpeg");
carrotimg=loadImage("images/carrot.png");
cucuimg=loadImage("images/cucumber.png");


}
function setup() {
  createCanvas(windowWidth,windowHeight);
  house=createSprite(windowWidth-1300,windowHeight-300);
  house.addImage(houseimg);
  apple=createSprite(windowWidth-1000,windowHeight-650);
  apple.addImage(appleimg);
  seed1=createSprite(width-1000,height-300);
  seed1.visible=false;
  seed1.addImage(seedimg)
  seed1.scale=0.1;
  seed2=createSprite(width-1000,height-300);
  seed2.visible=false;
  seed2.addImage(seedimg)
  seed2.scale=0.1;
  seed3=createSprite(width-1000,height-300);
  seed3.visible=false;
  seed3.addImage(seedimg);
  seed3.scale=0.1;
  carrot=createSprite(width-1000,height-480);
  carrot.addImage(carrotimg);
  carrot.scale=1.0;
  cucu=createSprite(width-1000,height-350);
  cucu.addImage(cucuimg);
  cucu.scale=0.2;
  
    
}

function draw() {
  if (gamestate===0){
    background("black");  
    
    textSize(24)
    text("press space to skip or continue" , width-1000,600)
   text("Story of the game",width-1000,20)
    textSize(8.3)
   text("There was an rich man named as raju And he always hates farmer because farmers are poor but he do not know that how much farmers help us in food by making them hardworkers . And such a one day he lost his whole properties and money and he only left with one farming land and one house near his farm now there is no option so he started farming  on his land ",width-1350,100);
   textSize(24)
   text("game rule",width-1000,200);
   textSize(10);
   text("So you will be raju and you will get 25 coins `and if reach 10000 coins then you will win ",width-1000,400)
  if(keyDown("space")){
    gamestate=1;
  }



  }
  if(gamestate===1){
  background(background1);  
  drawSprites();
  strokeWeight(5);
  line(650,550,250,1000);
  line(850,550,500,1000);
  line(1050,550,750,1000);
  line(1250,550,1000,1000);
  line(1450,550,1250,1000);
  line(515,705,1450,705)
  //600
  textSize(20);
  fill("gold")
  text(coins,100,100);
  fill("red");
  text("drag fast or i will take coins",300,100)
  fill("green")
  text("20",400,150)
  text("40",400,300)
  text("100",400,400)
 // text(lives,400,500)
  if(mousePressedOver(apple)&&coins>19){
    choice="apple"
    coins=coins-20;

  }
  else if(mousePressedOver(carrot)&&coins>39){
    choice="carrot"
    coins=coins-40;

  }
  else if(mousePressedOver(cucu)&&coins>99){
    choice="cucu"
    coins=coins-100;

  }
  if(seed1.x<600&&seed1.x>800&&seed1.y<720,seed1.y>650){
seed1.addImage(appleimg)
seed1.scale=0.2;
if(frameCount%500===0){
  seed1.visible=false;
  coins=coins+25;
  seed1.x=0;
  seed1.y=0;
  seed1.addImage(seedimg)
  seed1.scale=0.1
}
  }
  if(seed2.x<600&&seed2.x>800&&seed2.y<750,seed2.y>650){
    seed2.addImage(carrotimg)
    seed2.scale=0.4;
    if(frameCount%500===0){
      seed2.visible=false;
      coins=coins+55;
      seed2.x=0;
      seed2.y=0;
      seed2.addImage(seedimg)
      seed2.scale=0.1
    }
    
  }
  if(seed3.x<600&&seed3.x>800&&seed3.y<750,seed3.y>650){
      seed3.addImage(cucuimg)
      seed3.scale=0.2;
      if(frameCount%500===0){
        seed3.visible=false;
        coins=coins+155;
        seed3.x=0;
        seed3.y=0;
        seed3.addImage(seedimg)
        seed3.scale=0.1
      }
    }
   
  //console.log(seed1.x);
  console.log(seed1.x);
 
  var d = new Date(); // for now d.getHours(); // => 9 d.getMinutes(); // => 30 d.getSeconds(); // => 51
 
  
if(coins===10000){
  gamestate=2
}



}
if(gamestate===2){
  background("black")
  textSize(25)
  text("game ended you can uninstall the game",500,50);
}
}
function mouseDragged(){
  if(choice==="apple"){
    seed1.visible=true;
    seed1.x=mouseX;
    seed1.y=mouseY;
  }
  else if(choice==="carrot"){
    seed2.visible=true;
    seed2.x=mouseX;
    seed2.y=mouseY;
  }
  else if(choice==="cucu"){
    seed3.visible=true;
    seed3.x=mouseX;
    seed3.y=mouseY;
  }
  }
  function mouseRealsed(){
  
  seed1.x=seed1.x;
  seed1.y=seed1.y;
  seed2.x=seed2.x;
  seed2.y=seed2.y;
  seed3.x=seed3.x;
  seed3.y=seed3.y;
  
  
  
  
  
  }
