function create() {
  // Change "Codey's Adventures\n  in Code World" to the name of your game
  this.add.text(50, 100, "Kudito Cheetoz\n  in Futuriskon", { font: "40px Times New Roman", fill: "#ffa0d0"});

  // Change "by Codecademy" to your name!
  this.add.text(130, 300, "by JJ", { font: "20px Times New Roman", fill: "#ffa0d0"});
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create
	}
};

const game = new Phaser.Game(config);
.
.
.
.









function preload() {
  // Load in the sprite here!
  this.load.image('codey','https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
  
}

function create() {
  // Create a sprite game object here!
  this.add.sprite(40,90,'codey');

}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)
.
.
.
.
..
function preload() {
  // Load in the background image here!
  this.load.image('sky','https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg');
}

function create() {
  // Put the background image in the scene here!
  this.add.image(350,50,'sky');
}

const config = {
	type: Phaser.AUTO,
	width: 4500,
	height: 6000,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)
.
.
.
.
.
let codey;

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  codey = this.add.sprite(30, 200, 'codey')
}
function update(){
 codey.x += 1;  
}
// Create your update() function here

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 400,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update,
   
    // Include update here!
	}
}

const game = new Phaser.Game(config)
.
..
.
.
.
const gameState = {};

function create() {
  // Create a circle and assign it to gameState.circle here
gameState.circle=this.add.circle(200,240,80,0x0FF839);
}

function update() {
  // Update the circle in gameState.circle here
gameState.circle.y+=1;
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update,
	}
}

const game = new Phaser.Game(config)
.
.
.
.
const gameState = {}

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Set cursor keys here!
  gameState.cursors=this.input.keyboard.createCursorKeys();
}

function update() {
  // Update based on keypress here!
  if(gameState.cursors.right.isDown){
    gameState.codey.x +=5;
  }
  if(gameState.cursors.left.isDown){
    gameState.codey.x -=5;
  }
  if(gameState.cursors.up.isDown){
    gameState.codey.y -=5;
  }
  if(gameState.cursors.down.isDown){
    gameState.codey.y +=5;
  }
  
 
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 500,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)
