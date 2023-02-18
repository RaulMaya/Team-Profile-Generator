const Player = require("./player");
class Defender extends Player {
    constructor(name, nation, club, age, email, defense, physical, tackle) {
        super(name, nation, club, age, email, "Defender");
        this.defense = defense;
        this.physical = physical;
        this.tackle = tackle;
    }
}

module.exports = Defender;