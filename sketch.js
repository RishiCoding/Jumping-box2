var box;
var surface1, surface2, surface3, surface4;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box=createSprite(random(20,750), 300, 30, 30);
    box.shapeColor="white";
    box.velocityX=(random(-7, 4));
    box.velocityY=(random(4, 7));
    surface1=createSprite(690, 580, 200, 30);
    surface1.shapeColor="green";
    surface2=createSprite(480, 580, 200, 30);
    surface2.shapeColor="purple";
    surface3=createSprite(270, 580, 200, 30);
    surface3.shapeColor="orange";
    surface4=createSprite(80, 580, 150, 30);
    surface4.shapeColor="red";
    topEdge=createSprite(400, 0, 800, 5);
    topEdge.visible=false;
    bottomEdge=createSprite(400, 600, 800, 5);
    bottomEdge.visible=false;
    rightEdge=createSprite(800, 400, 5, 800);
    rightEdge.visible=false;
    leftEdge=createSprite(0, 400, 5, 800);
    leftEdge.visible=false;
}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    if(box.isTouching(surface1)){
        box.bounceOff(surface1);
    }

    if(box.isTouching(surface2)){
        box.bounceOff(surface2);
    }

    if(box.isTouching(surface3)){
        box.bounceOff(surface3);
    }
    if(surface4.isTouching(box)){
        box.shapeColor="red";
        box.velocityX=0;
        box.velocityY=0;
    }
    box.bounceOff(leftEdge);
    box.bounceOff(rightEdge);
    box.bounceOff(topEdge);
    box.bounceOff(bottomEdge);
    drawSprites();
}   
