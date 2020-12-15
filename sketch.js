
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // createCanvas(600,600);
  
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();

  
}


function draw() {
background("white");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space") && monkey.y>=200 ){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  if(obstacleGroup.isTouching(monkey)){
     ground.setVelocityX=0;
    ground.x=300;
     obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  
  EatBanana();
  obstacles();
  
  monkey.collide(ground);
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:",+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,50,200);
}

function EatBanana(){
  if(frameCount%80===0){
    banana=createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-6;
    banana.lifetime=300;
    banana.scale=0.1;
    
    FoodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,315,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.lifetime=300;
    obstacle.scale=0.2;
    
    obstacleGroup.add(obstacle);
  }
}






