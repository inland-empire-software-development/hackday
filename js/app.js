const occupied = [];
const sprites =  [
  "images/char-boy.png",
  "images/char-cat-girl.png",
  "images/char-horn-girl.png",
  "images/char-pink-girl.png",
  "images/char-princess-girl.png"
];


const game = new Game();

let player = new Player();

//Array to hold Enemy objects
const allEnemies = [];


const enemy1 = new Enemy(101, 83, 150);
const enemy2 = new Enemy(404, 166, 350);
const enemy3 = new Enemy(0, 249, 375);
const enemy4 = new Enemy(0, 83, 100);

allEnemies.push(enemy1, enemy2, enemy3, enemy4);

// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    65: "left",
    37: "left",
    
    87: "up",
    38: "up",
      
    68: "right",
    39: "right",
      
    83: "down",
    40: "down",

    13: "enter"
  };

  player.handleInput(allowedKeys[e.keyCode]);
  game.handleInput(allowedKeys[e.keyCode]);
});

document.addEventListener("click", function (e) {
  e.preventDefault();
  if(e.target && e.target.id== 'retry-btn'){
    game.modal.close();
    occupied.splice(0, occupied.length);
    player = new Player();
  }
});