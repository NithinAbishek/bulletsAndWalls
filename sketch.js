var bullet,weight,speed;
var wall,thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);

  

  
}

function draw() {
  background(0,0,0);  
   if(hasCollided(bullet,wall)){
       bullet.velocityX = 0;
       var damage = 0.5 * weight * speed* speed/(thickness * thickness * thickness);
       
      if(damage>10){
          wall.shapeColor = (255,0,0);
      } 
      if(damage<10){
          wall.shapeColor = (0,255,0);
      }

   }

   
  drawSprites();
}

function hasCollided(lBullet,lWall){
   bulletRightEdge = lBullet.x + lBullet.width;
   wallLeftEdge = lWall.x;
 if(bulletRightEdge >= wallLeftEdge){
    return true;
  }else 
    return false;
}