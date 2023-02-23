const inquirer = require("inquirer");
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { buildHTML } = require('./buildHTML');
const Forward = require("./forward");
const Midfielder = require("./midfielder");
const Defender = require("./defender");
const Goalkeeper = require("./goalkeeper");
class LineUp {
  constructor() {
    this.name = "";
    this.nation = "";
    this.club = "";
    this.age = "";
    this.email = "";
    this.position = "";
    this.image = "";

    this.team = [];
    this.goalkeepers = [];
    this.defensives = [];
    this.midfielders = [];
    this.forwards = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "team",
          message: "Enter team name:",
        },
      ])
      .then(({ team }) => {
        this.club = team;
        return this.addPlayer();
      })
      .then(() => {
        console.log("Additional Info");
        return writeFile(
          join(__dirname, '..', 'dist', 'index.html'),
          buildHTML(this.club, this.goalkeepers, this.defensives, this.midfielders, this.forwards)
        );
      })
      .then(() => console.log('Created tasks.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
  addPlayer() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter player name:",
        },
        {
          type: "input",
          name: "nation",
          message: "Please enter player country:",
        },
        {
          type: "number",
          name: "age",
          message: "Please enter player age:",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter player email:",
        },
        {
          type: "list",
          name: "position",
          message: "Select the player position:",
          choices: ["Goalkeeper", "Defense", "Midfielder", "Forward"],
        },
        {
          type: "input",
          name: "image",
          message: "Please insert player image:",
        },
      ])
      .then(({ name, nation, age, email, position, image}) => {
        this.name = name;
        this.nation = nation;
        this.club = this.club;
        this.age = age;
        this.email = email;
        this.position = position;
        this.image = image;
        if (position === "Goalkeeper") {
          return this.goalkeeper();
        } else if (position === "Defense") {
          return this.defense();
        } else if (position === "Midfielder") {
          return this.midfielder();
        } else if (position === "Forward") {
          return this.forward();
        }
      });
  }
  goalkeeper() {
    console.log("Goalkeeper");
    return inquirer
      .prompt([
        {
          type: "number",
          name: "handling",
          message: "Handling rating:",
        },
        {
          type: "number",
          name: "reflexes",
          message: "Reflexes rating:",
        },
        {
          type: "number",
          name: "diving",
          message: "Diving rating:",
        },
      ])
      .then(({ handling, reflexes, diving }) => {
        let goalkeeperObj = new Goalkeeper(
          this.name,
          this.nation,
          this.club,
          this.age,
          this.email,
          this.image,
          handling,
          reflexes,
          diving
        );
        this.goalkeepers.push(goalkeeperObj);
        this.team.push(goalkeeperObj);
        console.log(this.team.length);
        if (this.team.length < 7) {
          return this.addPlayer();
        }
      });
  }
  defense() {
    console.log("Defense");
    return inquirer
      .prompt([
        {
          type: "number",
          name: "defense",
          message: "Defense rating:",
        },
        {
          type: "number",
          name: "physical",
          message: "Physical rating:",
        },
        {
          type: "number",
          name: "tackle",
          message: "Tackle rating:",
        },
      ])
      .then(({ defense, physical, tackle }) => {
        let defenseObj = new Defender(
          this.name,
          this.nation,
          this.club,
          this.age,
          this.email,
          this.image,
          defense,
          physical,
          tackle
        );
        this.defensives.push(defenseObj);
        this.team.push(defenseObj);
        console.log(this.team.length);
        if (this.team.length < 7) {
          return this.addPlayer();
        }
      });
  }
  midfielder() {
    console.log("Midfielder");
    return inquirer
      .prompt([
        {
          type: "number",
          name: "ballControl",
          message: "Ball control rating:",
        },
        {
          type: "number",
          name: "passing",
          message: "Passing rating:",
        },
        {
          type: "number",
          name: "positioning",
          message: "Positioning rating:",
        },
      ])
      .then(({ ballControl, passing, positioning }) => {
        let midfielderObj = new Midfielder(
          this.name,
          this.nation,
          this.club,
          this.age,
          this.email,
          this.image,
          ballControl,
          passing,
          positioning
        );
        this.midfielders.push(midfielderObj);
        this.team.push(midfielderObj);
        console.log(this.team.length);
        if (this.team.length < 7) {
          return this.addPlayer();
        }
      });
  }
  forward() {
    console.log("Forward");
    return inquirer
      .prompt([
        {
          type: "number",
          name: "shooting",
          message: "Shooting rating:",
        },
        {
          type: "number",
          name: "pace",
          message: "Pace rating:",
        },
        {
          type: "number",
          name: "headers",
          message: "Headers rating:",
        },
      ])
      .then(({ shooting, pace, headers }) => {
        let forwardObj = new Forward(
          this.name,
          this.nation,
          this.club,
          this.age,
          this.email,
          this.image,
          shooting,
          pace,
          headers
        );
        this.forwards.push(forwardObj);
        this.team.push(forwardObj);
        console.log(this.team.length);
        if (this.team.length < 7) {
          return this.addPlayer();
        }
      });
  }
}

module.exports = LineUp;

