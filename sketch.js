
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bobs(400,300,20);
	bob2 = new Bobs(360,300,20);
	bob3 = new Bobs(320,300,20);
	bob4 = new Bobs(440,300,20);
	bob5 = new Bobs(480,300,20);

	roof = new roofs(400,100,200,20);

	string1 = new Strings(bob1.body,roof.body,0*2,0);
	string2 = new Strings(bob2.body,roof.body,-20*2,0);
	string3 = new Strings(bob3.body,roof.body,-40*2,0);
	string4 = new Strings(bob4.body,roof.body,20*2,0);
	string5 = new Strings(bob5.body,roof.body,40*2,0);

	Engine.run(engine);
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  textSize(20);
  fill("white");
  textFont("bembo");
  text("Press Up Arrow To See The Pendulum",30,50)

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();
}

function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
	  Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-70, y: -70});
	  var hide = createSprite(100,50,1000,30);
      hide.shapeColor = "black";
	}
}


