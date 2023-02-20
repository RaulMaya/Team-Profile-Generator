const Header = require("./header.js");
const TeamBuilder = require("./teamBuilder");
const CompleteTeam = require("./completeTeam")

function buildHTML(teamName, team = []) {
  const header = new Header(teamName).render();
  const teamBuilder = team.map((t) => new TeamBuilder([t.name, t.age, t.nation]))
  console.log(teamBuilder)
  const completeTeam = new CompleteTeam(teamBuilder).render();
 
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${teamName} Fut-7 Line Up</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
        ${header}
        <main>
        ${completeTeam}
        </main>
    </body>
  </html>
  `;
}

module.exports = { buildHTML };
