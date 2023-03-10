const playerImg = document.querySelectorAll(".imageSelector");
const backdropSection = document.getElementById("backdrop");
const modalSection = document.getElementById("add-modal");

const toggleBackdrop = () => {
  backdropSection.classList.toggle("visible");
};

const playerModal = () => {
  modalSection.classList.add("visible");
};

const backdropHandler = () => {
  backdropSection.classList.toggle("visible");
  modalSection.classList.remove("visible");
};

const modalCreation = (
  name,
  image,
  age,
  nation,
  email,
  position,
  stats,
  overall
) => {
  return `<div>
  ${image}
</div>
<div>
  <p class="playerName">${name}</p>
  <hr>
  <div class="information">
    <p>๐ ${nation}</p>
    <p>๐ ${age} years</p>
    <p>๐ ${position}</p>
  </div>
  <div class="stats">
    ${stats}
    <div class="overall">
      <p>Overall:</p>
      <p><b>${overall}</b></p>
    </div>
  </div>

  <p>๐ง ${email}</p>
</div>`;
};

const playerCard = (i) => {
  let stats;
  console.log(playerImg[i].parentElement.parentElement.children)
  const playerName =
    playerImg[i].parentElement.parentElement.children[1].textContent;
  const playerImage = playerImg[i].outerHTML;
  const nation =
    playerImg[i].parentElement.parentElement.children[2].textContent;
  const age = playerImg[i].parentElement.parentElement.children[3].textContent;
  const email = playerImg[i].parentElement.parentElement.children[4].innerHTML;
  const position =
    playerImg[i].parentElement.parentElement.children[5].textContent;

  const stat1 =
    playerImg[i].parentElement.parentElement.children[6].textContent;
  const stat2 =
    playerImg[i].parentElement.parentElement.children[7].textContent;
  const stat3 =
    playerImg[i].parentElement.parentElement.children[8].textContent;
  const overall =
    playerImg[i].parentElement.parentElement.children[9].textContent;
  if (position === "Goalkeeper") {
    stats = `<div>
    <p>๐งค Handling: <b>${stat1}</b></p>
    <p>๐งค Reflexes: <b>${stat2}</b></p>
    <p>๐งค Diving: <b>${stat3}</b></p>
  </div>`;
  } else if (position === "Defender") {
    stats = `<div>
    <p>โฝ Defense: <b>${stat1}</b></p>
    <p>โฝ Physical: <b>${stat2}</b></p>
    <p>โฝ Tackle: <b>${stat3}</b></p>
  </div>`;
  } else if (position === "Midfielder") {
    stats = `<div>
    <p>โฝ Ball Control: <b>${stat1}</b></p>
    <p>โฝ Dribbing: <b>${stat2}</b></p>
    <p>โฝ Positioning: <b>${stat3}</b></p>
  </div>`;
  } else if (position === "Forward") {
    stats = `<div>
    <p>โฝ Shot Power: <b>${stat1}</b></p>
    <p>โฝ Headers: <b>${stat2}</b></p>
    <p>โฝ Pace: <b>${stat3}</b></p>
  </div>`;
  }
  modalSection.innerHTML = modalCreation(
    playerName,
    playerImage,
    age,
    nation,
    email,
    position,
    stats,
    overall
  );
  toggleBackdrop();
  playerModal();
};

playerImg[0].addEventListener("click", () => {
  playerCard(0);
});

playerImg[1].addEventListener("click", () => {
  playerCard(1);
});

playerImg[2].addEventListener("click", () => {
  playerCard(2);
});

playerImg[3].addEventListener("click", () => {
  playerCard(3);
});

playerImg[4].addEventListener("click", () => {
  playerCard(4);
});

playerImg[5].addEventListener("click", () => {
  playerCard(5);
});

playerImg[6].addEventListener("click", () => {
  playerCard(6);
});

backdropSection.addEventListener("click", backdropHandler);
