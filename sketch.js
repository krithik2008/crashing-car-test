var car,wall;
var speed,weight;
//var orange,green,blue,red;

function setup() {
createCanvas(800,800);
wall=createSprite(800,150,60,height/2);
wall.shapeColor="orange";

speed=random(55,90);
weight=random(400,1500);

car=createSprite(50, 200, 50, 50);
car.velocityX=speed;
car.shapeColor=color(0);



}

function draw() {
background(255,255,255);

if(wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=(0.5*weight*speed*speed)/22500;
console.log(deformation);
if(deformation>180)
{
car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>80)
{
car.shapeColor=color(230,230,0);
}
if(deformation<80)
{
car.shapeColor=color(0,255,0);
} 
}
drawSprites();
}
