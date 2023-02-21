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
    <p>🌎 ${nation}</p>
    <p>🎂 ${age} years</p>
    <p>📍 ${position}</p>
  </div>
  <div class="stats">
    ${stats}
    <div class="overall">
      <p>Overall:</p>
      <p><b>${overall}</b></p>
    </div>
  </div>

  <p>📧 ${email}</p>
</div>`;
};

playerImg[0].addEventListener("click", () => {
  let stats;
  const playerName =
    playerImg[0].parentElement.parentElement.children[0].textContent;
  const playerImage = playerImg[0].outerHTML;
  const nation =
    playerImg[0].parentElement.parentElement.children[1].textContent;
  const age = playerImg[0].parentElement.parentElement.children[2].textContent;
  const email = playerImg[0].parentElement.parentElement.children[3].innerHTML;
  const position =
    playerImg[0].parentElement.parentElement.children[4].textContent;

  const stat1 =
    playerImg[0].parentElement.parentElement.children[6].textContent;
  const stat2 =
    playerImg[0].parentElement.parentElement.children[7].textContent;
  const stat3 =
    playerImg[0].parentElement.parentElement.children[8].textContent;
  const overall =
    playerImg[0].parentElement.parentElement.children[9].textContent;
  if (position === "Goalkeeper") {
    stats = `<div>
    <p>⚽ Shot Power: <b>${stat1}</b></p>
    <p>⚽ Headers: <b>${stat2}</b></p>
    <p>⚽ Pace: <b>${stat3}</b></p>
  </div>`;
  } else if (position === "Defender") {
    stats = `<div>
    <p>⚽ Shot Power: <b>${stat1}</b></p>
    <p>⚽ Headers: <b>${stat2}</b></p>
    <p>⚽ Pace: <b>${stat3}</b></p>
  </div>`;
  } else if (position === "Midfielder") {
    stats = `<div>
    <p>⚽ Shot Power: <b>${stat1}</b></p>
    <p>⚽ Headers: <b>${stat2}</b></p>
    <p>⚽ Pace: <b>${stat3}</b></p>
  </div>`;
  } else if (position === "Forward") {
    stats = `<div>
    <p>⚽ Shot Power: <b>${stat1}</b></p>
    <p>⚽ Headers: <b>${stat2}</b></p>
    <p>⚽ Pace: <b>${stat3}</b></p>
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
});

playerImg[1].addEventListener("click", () => {
  const playerName =
    playerImg[1].parentElement.parentElement.children[0].textContent;
  modalSection.innerHTML = playerName;
  toggleBackdrop();
  playerModal();
});

playerImg[2].addEventListener("click", () => {
  const playerName =
    playerImg[2].parentElement.parentElement.children[0].textContent;
  modalSection.innerHTML = playerName;
  toggleBackdrop();
  playerModal();
});

playerImg[3].addEventListener("click", () => {
  const playerName =
    playerImg[3].parentElement.parentElement.children[0].textContent;
  modalSection.innerHTML = playerName;
  toggleBackdrop();
  playerModal();
});

playerImg[4].addEventListener("click", () => {
  const playerName =
    playerImg[4].parentElement.parentElement.children[0].textContent;
  modalSection.innerHTML = playerName;
  toggleBackdrop();
  playerModal();
});

playerImg[5].addEventListener("click", () => {
  const playerName =
    playerImg[5].parentElement.parentElement.children[0].textContent;
  modalSection.innerHTML = playerName;
  toggleBackdrop();
  playerModal();
});

playerImg[6].addEventListener("click", () => {
  const playerName =
    playerImg[6].parentElement.parentElement.children[0].textContent;
  modalSection.innerHTML = playerName;
  toggleBackdrop();
  playerModal();
});

backdropSection.addEventListener("click", backdropHandler);
