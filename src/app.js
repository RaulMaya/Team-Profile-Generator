const playerImg =  document.getElementsByTagName("img");
const backdropSection = document.getElementById('backdrop');


playerImg[0].addEventListener("click", () => {
    console.log(playerImg[0])
    toggleBackdrop()
})

const toggleBackdrop = () => {
    backdropSection.classList.toggle('visible');
}