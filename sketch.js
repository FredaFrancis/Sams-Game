var bg1
var Spaceship1
var Spaceship2
var spaceship1
var spaceship2
var player
var gameState = 0;
var playerCount;
var allPlayers;
var database
var form;
function preload(){

bg1=loadImage("space bg.jpg")
spaceship1=loadAnimation("ship_1.png","ship_2.png","ship_3.png","ship_4.png")
spaceship2=loadAnimation("space_ship_1.png","space_ship_2.png","space_ship_3.png","space_ship_4.png")
}

function setup(){
    canvas = createCanvas(1400,800);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
    background("white");
text(mouseX+","+mouseY,mouseX,mouseY)
if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
      
}
