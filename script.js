const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-btn");

const randomChannel = function (max) {
  return Math.floor(Math.random() * (max + 1));
};

function createGrid(size) {
  const gridSize = container.offsetWidth;
  let squareSize = gridSize / size;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");

      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;

      let red = randomChannel(255);
      let green = randomChannel(255);
      let blue = randomChannel(255);

      div.addEventListener("mouseover", function () {
        red = red * 0.9;
        green = green * 0.9;
        blue = blue * 0.9;

        div.style.backgroundColor = `rgb(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)})`;
      });

      container.appendChild(div);
    }
  }
}

gridBtn.addEventListener("click", function () {
  let input = Number(prompt("Select number of square per side"));

  if (input < 1 || input > 100 || Number.isNaN(input)) {
    alert("Value should be between 1 and 100");
    return;
  }
  container.innerHTML = "";
  createGrid(input);
});
