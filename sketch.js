const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground,pumpkin,ghost1,ghost2,ghost3,ghost4,ghost5,bear1,bear2,log1,log2,log3,log4;

function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = Bodies.rectangle(300, 590, 600, 20, ground_options);
    pumpkin = new Pumpkin(100,100);
    ghost1 = new Ghost(700,320);
    ghost1 = new Ghost(920,320);
    bear1 = new Bear(810,350);
    log1 = new Log(810,260,300, PI/2)

    ghost3 = new Ghost(700,20,70,70);
    ghost4 = new Ghost(920,240,70,70);
    bear2 = new Log(810,180,300, PI/2);

    ghost5 = new Ghost(810,160,70,70);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);



}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    pumpkin.display();
    ghost1.display();
    ghost1.display();
    bear1 .display();
    log1.display();
    ghost3.display();
    ghost4.display();
    bear2 .display();
    ghost5.display();
    log3.display();
    log4.display();
}

