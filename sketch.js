const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird;
var pig1,pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(300,200,50,50);

    box1 = new Box(800,365,50,50);
    box2 = new Box(800,290,50,50);
    box3 = new Box(981,290,50,50);
    box4 = new Box(981,365,50,50);
    box5 = new Box(890,220,50,50);

    log1 = new Log(890,350,260,PI/2);
    log2 = new Log(890,280,260,PI/2);
    log3 = new Log(830,200,135,PI/4);
    log4 = new Log(936,200,130,-PI/4);

    pig1 = new Pig(890,365,50,50);
    pig2 = new Pig(890,290,50,50);

    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    bird.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();

    ground.display();
}