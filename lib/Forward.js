const Player = require("./Player");

class Forward extends Player {
    constructor(name, nation, club, age, email, shooting, pace, headers) {
        super(name, nation, club, age, email, "Forward");
        this.shooting = shooting;
        this.pace = pace;
        this.headers = headers;
    }
}

module.exports = Forward;