var wall,car;
var speed, weight;
var wall,thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX = speed
  wall=createSprite(1200, 200, thickness, height/2);
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)

}
function hasCollided (lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width
  wallLeftEdge=wall.x
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
function draw() {
  background(255,255,255);  
  drawSprites();
if (wall.x-car.x < (car.width + wall.width)/2) 
{
car.velocityX = 0;
var deformation=0.5 * weight * speed* speed/22509
if (deformation>180){
  car.shapeColour=colour(255,0,0)
}
if (deformation<180 && deformation>100){
car.shapeColour=colour(230,230,0)
}
if (defotmation<100){
  car.shapeColour=colour(0,255,0)
}
}
if (hasCollided(bullet,wal)){
  bullet.velocityX=0
  var damage=0.5 *weight * speed * speed/(thickness * thickness * thickness)
  if (damage>10){
    wall.shapeColour=colour(255,0,0)
  }
  if (damage<10){
    wall.shapeColour=colour(0,255,0)
  }
}

}