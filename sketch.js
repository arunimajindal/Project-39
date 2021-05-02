var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var track , car1_image,car2_image,car3_image,car4_image, ground;
var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("images/track.png");
  car1_image = loadImage("images/superhero1.png");
  car2_image = loadImage("images/superhero.png");
  car3_image = loadImage("images/superhero2.png");
  car4_image = loadImage("images/superhero3.png");
  ground = loadImage("images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 )
{
  game.end();
}
}
