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

    this.team = [];
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
          buildHTML(this.club, this.team)
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
      ])
      .then(({ name, nation, age, email, position}) => {
        this.name = name;
        this.nation = nation;
        this.club = this.club;
        this.age = age;
        this.email = email;
        this.position = position;
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
          handling,
          reflexes,
          diving
        );
        this.team.push(goalkeeperObj);
        console.log(this.team.length);
        if (this.team.length < 1) {
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
          defense,
          physical,
          tackle
        );
        this.team.push(defenseObj);
        console.log(this.team.length);
        if (this.team.length < 1) {
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
          ballControl,
          passing,
          positioning
        );
        this.team.push(midfielderObj);
        console.log(this.team.length);
        if (this.team.length < 1) {
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
          shooting,
          pace,
          headers
        );
        this.team.push(forwardObj);
        console.log(this.team.length);
        if (this.team.length < 1) {
          return this.addPlayer();
        }
      });
  }
}

module.exports = LineUp;

// const eHaaland = new Forward(
//   "Erling Haaland",
//   "Norway",
//   "Manchester City",
//   23,
//   "erlinghaaland@hotmail.com",
//   95,
//   92,
//   93
// );

// console.log(eHaaland);

// const generateHTML = () =>
//   `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>My Team</title>
//   </head>
//   <body>

//   </body>
//   </html>`;

// const playerData = () => {
//   return inquirer.prompt([
// {
//   type: "list",
//   name: "position",
//   message: "Select the player position:",
//   choices: ["Goalkeeper", "Defense", "Midfilder", "Forward"],
// },
//   ]);
// };

// const positionData = ({ name, position }) => {
//   if (position === "Defense") {
// return inquirer.prompt([
//   {
//     type: "number",
//     name: "defense",
//     message: "Defense rating:",
//   },
//   {
//     type: "number",
//     name: "physical",
//     message: "Physical rating:",
//   },
//   {
//     type: "number",
//     name: "tackle",
//     message: "Tackle rating:",
//   },
// ]);
//   } else if (position === "Goalkeeper") {
// return inquirer.prompt([
//   {
//     type: "number",
//     name: "Handling",
//     message: "Handling rating:",
//   },
//   {
//     type: "number",
//     name: "Reflexes",
//     message: "Reflexes rating:",
//   },
//   {
//     type: "number",
//     name: "Diving",
//     message: "Diving rating:",
//   },
// ]);
//   } else if (position === "Midfielder") {
// return inquirer.prompt([
//   {
//     type: "number",
//     name: "ballControl",
//     message: "Ball control rating:",
//   },
//   {
//     type: "number",
//     name: "passing",
//     message: "Passing rating:",
//   },
//   {
//     type: "number",
//     name: "positioning",
//     message: "Positioning rating:",
//   },
// ]);
//   } else if (position === "Forward") {
// return inquirer.prompt([
//   {
//     type: "number",
//     name: "shooting",
//     message: "Shooting rating:",
//   },
//   {
//     type: "number",
//     name: "pace",
//     message: "Pace rating:",
//   },
//   {
//     type: "number",
//     name: "headers",
//     message: "Headers rating:",
//   },
// ]);
//   }
// };

// const init = () => {
//   playerData()
//     .then((answers) => positionData(answers))
//     .then((res) => console.log(res));
// };

// init();
// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });

// var words = [
//   "ALPHA",
//   "BRAVO",
//   "CHARLIE",
//   "DELTA",
//   "ECHO",
//   "FOXTROT",
//   "GOLF",
//   "HOTEL",
//   "INDIA",
//   "JULIET",
//   "KILO",
//   "LIMA",
//   "MIKE",
//   "NOVEMBER",
//   "OSCAR",
//   "PAPA",
//   "QUEBEC",
//   "ROMEO",
//   "SIERRA",
//   "TANGO",
//   "UNIFORM",
//   "VICTOR",
//   "WHISKEY",
//   "XRAY",
//   "YANKEE",
//   "ZULU",
// ];

// // declare an async function
// async function nodeMan() {
//   var wrongs = 0;
//   var lettersGuessed = [];
//   var word = words[Math.floor(Math.random() * words.length)];
//   var goldenBoy = word.split("");
//   var blank = "_" + word.length;

//   console.log(blank);

//   for (var i = 0; wrongs < 10; i++) {
//     var neem = "Question " + i;
//     console.log(wrongs)
//     // wait for asynchronous response
//     var response = await inquirer.prompt([
//       {
//         name: 'name',
//         message: "Guess a letter",
//       },
//     ]);
//     console.log(response);
//     console.log("print");
//     lettersGuessed.push(response.name);
//     console.log(lettersGuessed)
//     console.log(response.name)
//     if (response.name.length < 1 && lettersGuessed.indexOf(response.name)) {
//       console.log(" first if statement cleared");
//       for (var u = 0; u < goldenBoy.length; u++) {
//         if (goldenBoy[u] === response.name) {
//           blank[u] = response.name;
//           console.log(blank);
//         }
//       }
//     }
//   }
// }
// nodeMan();
