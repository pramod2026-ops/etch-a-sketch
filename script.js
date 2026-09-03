const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-btn");

const gridSize = 500;

const randomColor = function (number) {
  return Math.floor(Math.random() * (number + 1));
};

function createGrid(size) {
  let squareSize = gridSize / size;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");

      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;

      let count = 0;
      let red = randomColor(255);
      let green = randomColor(255);
      let blue = randomColor(255);

      div.addEventListener("mouseover", function () {
        count++;
        red = red * 0.9;
        green = green * 0.9;
        blue = blue * 0.9;

        /*if (count === 10) {
          div.style.backgroundColor = "black";
        }

        console.log(count);

        div.style.backgroundColor = `rgb(${randomColor(255)} ${randomColor(255)} ${randomColor(255)})`;
        replace with below logic*/

        div.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
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
