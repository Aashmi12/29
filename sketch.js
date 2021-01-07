const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var slingShot;



function setup(){
    createCanvas(1600,600);

    engine = Engine.create();
    world = engine.world;

    box1 = new Box(570,414,40,50);
    box2 = new Box(611,414,40,50);
    box3 = new Box(652,414,40,50);
    box4 = new Box(693,414,40,50);
    box5 = new Box(734,414,40,50);
    box6 = new Box(775,414,40,50);
    box7 = new Box(816,414,40,50);

    box8 = new Box(611,363,40,50);
    box9 = new Box(652,363,40,50);
    box10 = new Box(693,363,40,50);
    box11 = new Box(734,363,40,50);
    box12 = new Box(775,363,40,50);

    box13 = new Box(652,312,40,50);
    box14 = new Box(693,312,40,50);
    box15 = new Box(734,312,40,50);

    box16 = new Box(693,261,40,50);

    box17 = new Box(1100,264,40,50);
    box18 = new Box(1141,264,40,50);
    box19 = new Box(1182,264,40,50);
    box20 = new Box(1223,264,40,50);
    box21= new Box(1264,264,40,50);

    box22 = new Box(1141,213,40,50);
    box23 = new Box(1182,213,40,50);
    box24 = new Box(1223,213,40,50);

    box25 = new Box(1182,163,40,50);

    
    ground1 = new Ground(800,600,1600,20);
    ground2 = new Ground(700,450,350,20);
    ground3 = new Ground(1200,300,300,20);

    polygon = new Polygon(200,200,40,40);
    slingShot = new SlingShot(this.polygon,{x:200, y:200});

}



function draw(){
    background(2,246,247);

    push()
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    pop()

    push()
    fill("yellow");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    pop()

    push()
    fill("red");
    box13.display();
    box14.display();
    box15.display();
    pop()

    push()
    fill("purple");
    box16.display();
    pop()



    push()
    fill("red");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    pop()

    push()
    fill("blue");
    box22.display();
    box23.display();
    box24.display();
    pop()

    push()
    fill("yellow");
    box25.display();
    pop()

   
    fill(2,247,2);
    ground1.display();
    ground2.display();
    ground3.display();

    slingShot.display();
    
    polygon.display();

}



function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
  
  

function mouseReleased() {
    slingShot.fly();
}
  
  

function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(polygon.body, {x:85, y:200})
        slingShot.attach(polygon.body);
    }
}

