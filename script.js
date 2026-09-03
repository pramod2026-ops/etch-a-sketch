const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-btn");

const gridSize = 500;

function createGrid(size) {
  let squareSize = gridSize / size;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");

      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;

      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "black";
      });

      container.appendChild(div);
    }
  }
}

gridBtn.addEventListener("click", function () {
  let input = Number(prompt("Select number of square per side"));

  if (input < 1 || input > 100) {
    alert("Value should be between 1 and 100");
    return;
  }
  container.innerHTML = "";
  createGrid(input);
});
