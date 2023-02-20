const Player = require("./player");
class Defender extends Player {
    constructor(name, nation, club, age, email,image, defense, physical, tackle) {
        super(name, nation, club, age, email, "Defender", image);
        this.defense = defense;
        this.physical = physical;
        this.tackle = tackle;
        this.overall = Math.floor((this.defense + this.physical + this.tackle)/3)
    }
}

module.exports = Defender;