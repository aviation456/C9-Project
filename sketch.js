console.log("Press the arrow keys to change the colour of the canvas. Made by Nikhil.")

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

  
  
}

function draw() 
{
  if( box.x <= 0 || box.x >= 400){
    box.x = (200,200)
  }
  if( box.y <= 0 || box.y >= 400){
    box.x = (200,200)
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    background("purple")
    box.x += 1
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("lightgreen");
    box.x += -1
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("blue");
    box.y += -1
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("red");
    box.y += 1
  }


  
  drawSprites();
}

