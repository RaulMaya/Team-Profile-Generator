const Player = require("./player");

class Goalkeeper extends Player {
    constructor(name, nation, club, age, email, image, handling, reflexes, diving) {
        super(name, nation, club, age, email, "Goalkeeper", image);
        this.handling = handling;
        this.reflexes = reflexes;
        this.diving = diving;
        this.overall = Math.floor((this.handling + this.reflexes + this.diving)/3)
    }
}

module.exports = Goalkeeper;