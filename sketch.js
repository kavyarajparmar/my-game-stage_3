var bg,bgImg;
var p1,p2,p3,p4,p5
var ice1,ice2
var p1_img,p2_img,p3_img,p4_img,p5_img
var ice1_img,ice2_img

function preload(){
  p1_img=loadImage("p1.png")
  p2_img=loadImage("p2.png")
  p3_img=loadImage("p3.png")
  p4_img=loadImage("p4.png")
  p5_img=loadImage("p5.png")
  ice1_img=loadImage("ice1.jpg")
  ice2_img=loadImage("ice2.jpg")
bgImg=loadImage("bg.jpg")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
p1=createSprite(displayWidth-450,displayHeight-630,20,20)
p1.addImage(p1_img)
p1.scale=0.5

p2=createSprite(displayWidth-460,displayHeight-266,20,20)
p2.addImage(p2_img)
p2.scale=0.5

p3=createSprite(displayWidth-950,displayHeight-590,20,20)
p3.addImage(p3_img)
p3.scale=0.5

p4=createSprite(displayWidth-950,displayHeight-270,20,20)
p4.addImage(p4_img)
p4.scale=0.5

p6=createSprite(displayWidth-970,displayHeight-450,20,20)
p6.addImage(p1_img)
p6.scale=0.5

p7=createSprite(displayWidth-700,displayHeight-630,20,20)
p7.addImage(p2_img)
p7.scale=0.5

p8=createSprite(displayWidth-700,displayHeight-250,20,20)
p8.addImage(p3_img)
p8.scale=0.5

p9=createSprite(displayWidth-400,displayHeight-450,20,20)
p9.addImage(p4_img)
p9.scale=0.5

ice1=createSprite(displayWidth-800,displayHeight-450,20,20)
ice1.addImage(ice1_img)
ice1.scale=0.8

ice2=createSprite(displayWidth-800,displayHeight-450,20,20)
ice2.addImage(ice2_img)
ice2.scale=0.8
ice2.visible=false

ice3=createSprite(displayWidth-550,displayHeight-450,20,20)
ice3.addImage(ice1_img)
ice3.scale=0.8

ice4=createSprite(displayWidth-550,displayHeight-450,20,20)
ice4.addImage(ice2_img)
ice4.scale=0.8
ice4.visible=false


//creating the player sprite
/*player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
*/

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
*/
drawSprites();

}
