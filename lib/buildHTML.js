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
  // Goalkeepers
  const gkBuilder = goalkeepers.map(
    (g) =>
      new TeamBuilder([
        g.image,
        g.name,
        g.nation,
        g.age,
        g.email,
        g.position,
        g.handling,
        g.reflexes,
        g.diving,
        g.overall,
      ])
  );
  const completeGK = new CompleteTeam(gkBuilder).render();

  // Defenders
  const dfBuilder = defenders.map(
    (d) =>
      new TeamBuilder([
        d.image,
        d.name,
        d.nation,
        d.age,
        d.email,
        d.position,
        d.defense,
        d.physical,
        d.tackle,
        d.overall,
      ])
  );
  const completeDF = new CompleteTeam(dfBuilder).render();

  // Midfielders
  const mfBuilder = midfielders.map(
    (m) =>
      new TeamBuilder([
        m.image,
        m.name,
        m.nation,
        m.age,
        m.email,
        m.position,
        m.ballControl,
        m.dribbling,
        m.positioning,
        m.overall,
      ])
  );
  const completeMF = new CompleteTeam(mfBuilder).render();

  // Forwards
  const fwBuilder = forwards.map(
    (f) =>
      new TeamBuilder([
        f.image,
        f.name,
        f.nation,
        f.age,
        f.email,
        f.position,
        f.shooting,
        f.pace,
        f.headers,
        f.overall,
      ])
  );
  const completeFW = new CompleteTeam(fwBuilder).render();

  return `<!DOCTYPE html> 
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Fut-7: ${teamName} Line Up</title>
      <link rel="stylesheet" href="styles.css" />
      <link rel="icon" type="image/x-icon" href="./images/teamgenerator.png">
      <script src="../src/app.js" defer></script>
    </head>
    <body>
    <div id="backdrop"></div>
    <div class="modal" id="add-modal"></div>
    ${header}
    <main class="pitch">
      <div class="field left">
        <div class="penalty-area"></div>
      </div>
      <div class="field right">
        <div class="penalty-area"></div>
      </div>
      <div class="center-circle"></div>
      <div class="main-players">
        ${completeGK}
        ${completeDF}
        ${completeMF}
        ${completeFW}
      </div>
    </main>
    </body>
  </html>
  `;
}

module.exports = { buildHTML };
