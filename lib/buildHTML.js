const Header = require("./header.js");

function buildHTML(teamName, team = []) {
  console.log(team);
  console.log(teamName);
  const header = new Header(teamName).render();

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
    </body>
  </html>
  `;
}

module.exports = { buildHTML };
