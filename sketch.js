var db;

var gameState=0;
var playerCount=0;

var form, game, player;
var backgroundImage;
var canvas;

function setup(){
  
  db = firebase.database();
  console.log(db);
  canvas = createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
    
}

