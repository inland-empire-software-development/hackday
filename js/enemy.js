//Enemy class
class Enemy extends Populate {
  constructor (x, y, speed) {
    super();
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/enemy-bug.png";
    this.enemySprite = this.sprite;
  }

  //Smooth movement of Enemy objects across gameboard
  update (dt) {
    if (this.x < this.sideways * 5) {
      this.x += this.speed * dt;
    } else {
      this.x = -100;
    }
  }
}