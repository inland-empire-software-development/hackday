//Game State Manager
class Game {
    state = {
        hasBegun: false,
        levelComplete: false
    };

    setModal(modal) {
        this.modal = modal;
    }
//key input for whole game
  handleInput (input) {
    if(input === "enter") {
        if (!this.state.hasBegun) {
            this.modal.close();
            this.state.hasBegun = true;
        }

        if (this.state.levelComplete) {
            this.modal.close();
            this.state.levelComplete = false;
            occupied.splice(0, occupied.length);
        }
    }
   
  }
}