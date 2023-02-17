const Player = require("./Player");

class Midfielder extends Player {
    constructor(name, nation, club, age, email, ballControl, passing, positioning) {
        super(name, nation, club, age, email, "Midfielder");
        this.ballControl = ballControl;
        this.dribbling = passing;
        this.positioning = positioning;
    }
}

module.exports = Midfielder;
