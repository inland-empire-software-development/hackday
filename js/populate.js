//Parent object for sprites
class Populate {
  constructor () {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.sprite = "";
    this.sideways = 101;
    this.upDown = 83;
  }

  render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset () {
    this.x = 0;
    this.y = 415;
  }
}