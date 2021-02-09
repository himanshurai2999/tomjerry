var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;
var garden;

function preload() {
    //load the images here
cat1Image=loadImage("cat1.png,cat2.png,cat3.png,cat4.png");
gardenImage=loadImage("garden.png");
mouseImage=loadImage("mouse1.png,mouse2.png,mouse3.png,mouse4.png")

}

function setup(){
    createCanvas(1000,800);
  background = createSprite(0,0,1000,800)
  background.addImage(backgroundImage);

  cat1=createSprite(500,600,1000,800)
  cat1.addImage(cat1Image);

  cat2=createSprite(500,600,1000,800)
  cat2.addImage(cat1Image);

  cat3=createSprite(500,600,1000,800)
  cat3.addImage(cat1Image);

  cat4=createSprite(500,600,1000,800)
  cat4.addImage(cat1Image);
}

function draw() {

    background("background.png");
    

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat1.velocityX=-5;
      cat.addAnimation("catRunning",catImage2);
      cat.changeAnimation("catRunning");
      }
  }
text(mouse+','+ mouseY,10,45);

if(cat.x-mouse.x<(cat.width-mouse.width)/2)

}


