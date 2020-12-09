//const Engine = Matter.Engine;
 //const  World = Matter.World;
 //const Events = Matter.Events;
 // const Bodies = Matter.Bodies;
  //const Constraint = Matter.Constraint;

var dog, happyDog,database,foodS,foodStock;
var dogImage1, dogImage2,dogImage3,dogImage4;
var dogSprite;

function preload()
{
  dogImage1=loadImage("images/Dog.png");
  dogImage2=loadImage("imagesddogImg.png");
  dogImage3=loadImage("images/dogImg1.png");
  dogImage4=loadImage("images/happydog.png");
}

function setup() {

  database = firebase.database();
  console.log(database);

  createCanvas(500,500);
  
  dogSprite=createSprite(width/2,80,10,10);
  dogSprite.addImage(dogImage1);
  dogSprite.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46,139,87);
  if(keyWentDown(UP_ARROW))
  { 
    writeStock(foodS);
    dogSprite.addImage(dogImage4);
  }

  drawSprites();
  //add styles here

  textSize(20);
  FileList("white");
  stroke(10);
  text("Food Stock:" +foodStock, 20,30);
}


functionreadStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({Food:x})
}


