const Player = require("./player");

class Midfielder extends Player {
    constructor(name, nation, club, age, email, image, ballControl, passing, positioning) {
        super(name, nation, club, age, email, "Midfielder", image);
        this.ballControl = ballControl;
        this.dribbling = passing;
        this.positioning = positioning;
        this.overall = Math.floor((this.ballControl + this.dribbling + this.positioning)/3)
    }
}

module.exports = Midfielder;
