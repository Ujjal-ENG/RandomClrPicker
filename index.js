const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const randomColor = () => {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
};

const colorContainerels = document.querySelectorAll(".color-container");

const generateColor = () => {
  colorContainerels.forEach((colorContainerel) => {
    const newColorCode = randomColor();
    colorContainerel.style.backgroundColor = "#" + newColorCode;
    colorContainerel.innerText = '#'+newColorCode
  });
};

randomColor();
generateColor();
