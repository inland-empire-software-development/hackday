//Player class
class Player extends Populate {
  constructor () {
    super();
    this.x = 0;
    this.y = 415;
    this.round = 0;
    this.sprite = sprites[this.round % sprites.length];
    this.lives = 5;
  }

  //key input for Player
  handleInput (input) {
    if(this.lives > 0) {
      switch (input) {
        case "left":
          if ((this.x >= this.sideways) && !(this.occupiedSpace((this.x - this.sideways), this.y))) {
            this.x -= this.sideways;
          }
          break;
        case "right":
          if ((this.x <= this.sideways * 3)  && !(this.occupiedSpace((this.x + this.sideways), this.y))) {
            this.x += this.sideways;
          }
          break;
        case "up":
          if ((this.y >= 83)  && !(this.occupiedSpace(this.x, (this.y - this.upDown)))) {
            this.y -= this.upDown;
          }
          break;
        case "down":
          if (this.y <= this.upDown * 4) {
            this.y += this.upDown;
          }
          break;
      }

      this.handleWin();
    }
  }

  //updates player and sets condition for collision & win
  update () {
    for (let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + enemy.sideways / 2 > this.x && enemy.x < this.x + this.sideways / 2)) {
        this.lives--;
        document.getElementById("life-counter").innerText = this.lives;
        this.reset();

        if (this.lives === 0) {
          game.modal.open(screenTemplates.gameOver);
        }
      }
    }
  }

  //check if occupied
  occupiedSpace (x, y) {
    return ((occupied.indexOf(x) >= 0) && y === 0);
  }

  //runs the win condition
  handleWin () {
    if (occupied.indexOf(this.x) < 0 && this.y === 0) {
      occupied.push(this.x);
      this.round++;
      document.getElementById("round-counter").innerText = (this.round + 1);
      document.getElementById("games-won").innerText = (this.round / sprites.length);

      this.sprite = sprites[this.round % sprites.length];
      this.reset();

      if(occupied.length === sprites.length) {
        game.state.levelComplete = true;
        game.modal.open(screenTemplates.newLevel);
      }
    }
  }
}
