var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "blue";

}

function draw() {
  background(255,255,255);  
  movingRect.x = world.mouseX;
  movingRect.y = world.mouseY;
  drawSprites();
}