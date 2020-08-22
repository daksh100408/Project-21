var bullets, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(20, 50);

  wall = createSprite(1500, 200, thickness, height/2);

  bullets = createSprite(100, 200, 50, 50);

  speed = random(20, 35);
  weight = random(50, 85);
}

function draw() {
  background(255,255,255);  

  bullets.velocityX = speed;

  if(hasCollided(bullets, wall)) {
   bullets.velocityX = 0;
   var damage = 0.5*weight*speed*speed(thickness* thickness*thickness);
   
  if(damage > 10) {
   wall.shapeColor = color(255, 0, 0);
  } 
  
  if(damage < 10) {
   wall.shapeColor = color(0, 255, 0);
  }

  }

  drawSprites();
}

function hasCollided(bullets, wall) {

bulletsRightEdge = bullets.x + bullets.width;
wallLeftEdge = bullet.x;

if(bulletsRightEdge >= wallLeftEdge) {
return true;
}  else {
return false;
}


}
