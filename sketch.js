
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,Ground
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
Ground = createSprite(300,550,600,10)
  score = 0;
  
 monkey = createSprite(300,500,0,0)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.20
 obstacleGroup = new Group(); 
}


function draw() {

  createCanvas(600,600);
  background("white");

  
if(keyDown("space")&& monkey.collide(Ground)) 
{
monkey.velocityY=-25
}
monkey.velocityY=monkey.velocityY+0.9;
monkey.collide(Ground);

  Obstecle();
Banana();
 
  drawSprites(); 

textSize(35)
fill("cyan")
text("Survival Time:"+score,24,30)
//score=Math.ceil(frameCount/frameRate())   
if (frameCount% 25===0)
{
  score=score +1
  
}
}
 

function Banana(){

 if (frameCount % 90 === 0){
  banana= createSprite(600,300,0,0)
  banana.addImage(bananaImage);
   banana.scale=0.15
   banana.y = Math.round(random(80,300));
   banana.velocityX = -4;  
}
}

function Obstecle(){
   if (frameCount % 150 === 0){
  obstacle = createSprite(660,500,50,50)
 obstacle.addImage(obstaceImage)
 obstacle.scale=".27"  
   obstacle.velocityX=-4
  obstacleGroup.add(obstacle)
   } 

}










