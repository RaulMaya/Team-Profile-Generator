const Player = require("./player");

class Forward extends Player {
    constructor(name, nation, club, age, email, shooting, pace, headers) {
        super(name, nation, club, age, email, "Forward");
        this.shooting = shooting;
        this.pace = pace;
        this.headers = headers;
        this.overall = Math.floor((this.shooting + this.pace + this.headers)/3)
    }
}

module.exports = Forward;