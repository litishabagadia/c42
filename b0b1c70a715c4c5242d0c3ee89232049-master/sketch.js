var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var bubbleImg1, gunImage1, gunImage2;
var bubbleImg2, bubbleImg3, bubbleImg4, bubbleImg5
var player1score =0;
var player2score =0;
var fruitGroup
var fruits
function preload(){
  bubbleImg1=loadImage("images/bubble_1.png");
  bubbleImg1.scale=.5
  bubbleImg2=loadImage("images/bubble_2.png");
  bubbleImg2.scale=.5
  bubbleImg3=loadImage("images/bubble_3.png");
  bubbleImg3.scale=.5
  bubbleImg4=loadImage("images/bubble_4.png");
  bubbleImg4.scale=.5
  bubbleImg5=loadImage("images/bubble_5.png");
  bubbleImg5.scale=.5
  gunImage1=loadImage("images/gun1.png");
  gunImage2=loadImage("images/gun2.png");
  back_img=loadImage("images/back.jpg");

}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  fruitGroup= new Group()
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}