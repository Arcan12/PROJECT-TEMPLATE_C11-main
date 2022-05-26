var navioimg
var marimage
var mar


function preload(){
navioimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
marimage=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  mar.addImage("mar",marimage);
  mar.x = mar.width /2;
  mar.velocityX = -4;



}
 
function draw() {
  background("blue");
    drawSprites();
    if(mar.x<0){
      mar.x=mar.width/2;
    }
 
}
