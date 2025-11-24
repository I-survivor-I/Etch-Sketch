
const grid = document.querySelector("#grid");

function makeGrid(size) {
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    // give it a class, e.g. "cell"
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
};

makeGrid(32);
