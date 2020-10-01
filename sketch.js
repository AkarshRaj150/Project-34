//variables
var Dog,dog,happyDog,database,Food,Foodtock;

function preload()
{
  //load images here
  happyDog=loadImage("happydog.png")
  dog=loadImage("Dog.png")
}

function setup() {
  createCanvas(500, 500);

  Dog=createSprite(250,250,20,20);
  Dog.addImage(dog);
  Dog.scale=0.15;

  database = firebase.database();

  Foodtock=database.ref('Food');
   Foodtock.on("value",readStock);



}


function draw() {
  background(46,139,87)

  if (keyWentDown(UP_ARROW)) {
    writeStock(Food);
    Dog.addImage(happyDog);
    Dog.scale=0.15;
  }
  
  

  drawSprites();

  //add styles here

   textSize(20)
   fill("white")
   text("Food Remaining : "+Food,180,150)
   text("Note : Press UP_ARROW Key To Feed Drago Milk!",30,20)

}

// Function to read values from DB
function readStock(data) {
  Food=data.val();
}
  //Function to write values in DB
  function writeStock(x){
    if (x<=0) {
      x-0;
    }else{
      x=x-1;
    }
  database.ref('/').update({
  Food:x
  })
  }


