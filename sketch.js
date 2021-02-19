var database;
var gameState=0;
var playerCount;
var form,player,game;

function setup(){
  createCanvas(450,400);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}

function draw(){

}