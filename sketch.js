var car , wall;
var speed , weight;

function setup() {
  createCanvas(1400,400);
  car = createSprite(50, 200, 50, 20);
  car.shapeColor="white";
  car.debug=true;
  wall = createSprite(1300,200,60,height/2);
  wall.shapeColor="white";
  wall.debug=true;

  speed=random(50,99);
  weight=random(400,1500);
}

function draw() {
  background("darkblue"); 
  
  car.velocityX=speed;
 
  if(wall.x - car.x < car.width/2 + wall.width/2){
    
    car.velocityX=0;
    var Deformation= 0.5*weight*speed*speed/22500;
    if(Deformation>180){
      car.shapeColor = color("red");
    }
    if(Deformation<180 && Deformation>120){
      car.shapeColor = color("yellow");
    }
    if(Deformation<120){
      car.shapeColor = color("green");
    }

  }

  drawSprites();
}