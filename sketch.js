var rect1,rect2

function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
 rect1.shapeColor="red";
 rect2= createSprite(100, 200, 50, 50);
 rect2.shapeColor="blue";
}


function draw() {
  background(255,255,255);  
 rect1.velocityX =-5;
 rect2.velocityX =5;


  if(rect2.x-rect1.x===rect2.width/2+rect1.width/2&&
    rect1.x-rect2.x===rect2.width/2+rect1.width/2)
    {
   
    rect2.shapeColor="yellow";
    rect1.shapeColor="yellow";
    rect2.velocityX =5;
 rect1.velocityX =-5;
  }

  //rect2.y-rect1.y<rect2.height/2+rect1.height/2&&
   // rect1.y-rect2.y<rect2.height/2+rect1.height/2)
  drawSprites();
}