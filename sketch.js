var monkey , monkeyR;
var banana ,bananaImage, obstacle, obstacleImage;
var bGroup, oGroup;
var survivalTime,score;
var ground;

function preload(){
  
 monkeyR =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkeyR);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  bGroup = createGroup();
  oGroup = createGroup();
}


function draw() {
 background("white");
  
  
  
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime,100,50)
  ground.x = ground.width/2;
  
  if (keyDown("space") && monkey.y >= 100){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground);
  drawSprites();
  food();
  obstacles();
}
function food(){
  if (frameCount % 80 === 0){
    banana = createSprite(200,0,50,50);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -2;
    banana.lifetime = 500;
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;
    obstacle.lifetime = 300;           
  }   
}




