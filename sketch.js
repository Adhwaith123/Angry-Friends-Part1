const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;
var gameState = "onSling";
var bg = "sprites/bg.png";
function preload() {
getBackground();
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1600,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(1005,320,70,70);
    box2 = new Box(1225,320,70,70);
    pig1 = new Pig(1110, 350);
    log1 = new Log(1105,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(910,240,70,70);
    pig3 = new Pig(810, 350);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(1110,160,70,70);
    log4 = new Log(965,12,150, PI/7);
    log5 = new Log(1074,12,150, -PI/7);

    box6 = new Box(810,160,70,70);
    log6 = new Log(960,120,600, PI/2);
  //  log7 = new Log(777,120,150, -PI/7);

  box7 = new Box(1020,4,70,70);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    fill("white");
    text("score:"+ score,900,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box6.display();
    log6.display();
  //  log7.display();

  box7.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();  
    
    //getBackground();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

 async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var back = await response.json();  
    //console.log(back);
 var  dt = back.datetime;
 var hour = dt.slice(11,13);
 console.log(hour);

 if(hour>=06&&hour<=19){
     bg = "sprites/bg.png" ;
 }
else{
    bg = "sprites/bg2.jpg";
}
backgroundImg = loadImage(bg);
}