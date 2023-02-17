const Player = require("./Player");

class Goalkeeper extends Player {
    constructor(name, nation, club, age, email, handling, reflexes, diving) {
        super(name, nation, club, age, email, "Goalkeeper");
        this.handling = handling;
        this.reflexes = reflexes;
        this.diving = diving;
    }
}

module.exports = Goalkeeper;