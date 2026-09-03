const container = document.querySelector("#container");

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      container.appendChild(div);
    }
  }
}
createGrid(16);
