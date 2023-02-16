const Player = require("./Player");

class Midfielder extends Player {
    constructor(name, nation, club, age, email, ballControl, dribbling, vision, shortPass, positioning, longPass) {
        super("Midfielder");
        this.name = name;
        this.nation = nation;
        this.club = club;
        this.age = age;
        this.email = email;
        this.ballControl = ballControl;
        this.dribbling = dribbling;
        this.positioning = positioning;
        this.vision = vision;
        this.shortPass = shortPass;
        this.longPass = longPass;
    }
    
}