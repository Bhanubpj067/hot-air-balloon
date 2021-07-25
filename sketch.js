var balloon, background;
var balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition , showError)


function preload() {
  backgroundImg = loadImage("1.png")
  balloonImage = loadAnimation("2.png", "3.png", "4.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(500,500);

balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw(){

    background(backgroundImg);
  
   if(keyDown(UP_ARROW)){
       updateHeight(0,-10);
   balloon.addAnimation("balloonImage");
balloon.scale=balloon.scale -0.01;   
}
   
   
   
   
   
  
        drawSprites();
    }
    function updateHeight(x,y){
        database.ref('balloon/height').set({
        'x' : height.x + x ,
        'y' : height.y + x 
        })
    }

    function readHeight(data){
height = data.val();
balloon.x = height.x;
balloon.y = height.y;
}
    function showError(){
        console.log("Error in writing to the database")
    }
    


