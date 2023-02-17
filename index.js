const inquirer = require("inquirer");
const fs = require("fs");

const Forward = require("./lib/Forward");
const Midfielder = require("./lib/Midfielder");
const Defender = require("./lib/Defender");
const Goalkeeper = require("./lib/Goalkeeper");

const eHaaland = new Forward(
  "Erling Haaland",
  "Norway",
  "Manchester City",
  23,
  "erlinghaaland@hotmail.com",
  95,
  92,
  93
);

console.log(eHaaland);

const generateHTML = () =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
  </head>
  <body>
      
  </body>
  </html>`;

const playerData = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "position",
      message: "Select the player position:",
      choices: ["Goalkeeper", "Defense", "Midfilder", "Forward"],
    },
  ]);
};

const positionData = ({ name, position }) => {
  if (position === "Defense") {
    return inquirer.prompt([
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
    ]);
  } else if (position === "Goalkeeper") {
    return inquirer.prompt([
      {
        type: "number",
        name: "Handling",
        message: "Handling rating:",
      },
      {
        type: "number",
        name: "Reflexes",
        message: "Reflexes rating:",
      },
      {
        type: "number",
        name: "Diving",
        message: "Diving rating:",
      },
    ]);
  } else if (position === "Midfielder") {
    return inquirer.prompt([
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
    ]);
  } else if (position === "Forward") {
    return inquirer.prompt([
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
    ]);
  }
};

const init = () => {
  playerData()
    .then((answers) => positionData(answers))
    .then((res) => console.log(res));
};

init();
// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });
