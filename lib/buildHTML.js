const Header = require("./header.js");
const TeamBuilder = require("./teamBuilder");
const CompleteTeam = require("./completeTeam");

function buildHTML(
  teamName,
  goalkeepers = [],
  defenders = [],
  midfielders = [],
  forwards = []
) {
  const header = new Header(teamName).render();
  console.log(goalkeepers);
  console.log(defenders);
  console.log(midfielders);
  console.log(forwards);
  // Goalkeepers
  const gkBuilder = goalkeepers.map(
    (g) =>
      new TeamBuilder([
        g.name,
        g.nation,
        g.age,
        g.email,
        g.position,
        g.image,
        g.handling,
        g.reflexes,
        g.diving,
      ])
  );
  const completeGK = new CompleteTeam(gkBuilder).render();

  // Defenders
  const dfBuilder = defenders.map(
    (d) =>
      new TeamBuilder([
        d.name,
        d.nation,
        d.age,
        d.email,
        d.position,
        d.image,
        d.defense,
        d.physical,
        d.tackle,
      ])
  );
  const completeDF = new CompleteTeam(dfBuilder).render();

  // Midfielders
  const mfBuilder = midfielders.map(
    (m) =>
      new TeamBuilder([
        m.name,
        m.nation,
        m.age,
        m.email,
        m.position,
        m.image,
        m.ballControl,
        m.dribbling,
        m.positioning,
      ])
  );
  const completeMF = new CompleteTeam(mfBuilder).render();

  // Forwards
  const fwBuilder = forwards.map(
    (f) =>
      new TeamBuilder([
        f.name,
        f.nation,
        f.age,
        f.email,
        f.position,
        f.image,
        f.shooting,
        f.pace,
        f.headers,
      ])
  );
  const completeFW = new CompleteTeam(fwBuilder).render();

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
        ${completeGK}
        ${completeDF}
        ${completeMF}
        ${completeFW}
        </main>
    </body>
  </html>
  `;
}

module.exports = { buildHTML };
