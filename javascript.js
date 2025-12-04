
const gridContainer = document.querySelector("#gridContainer");
const GRID_SIZE = 480;

createGrid(16); // default

// -------------------------------
// CREATE GRID
// -------------------------------
function createGrid(n) {
    gridContainer.innerHTML = ""; // clear old

    for (let i = 0; i < n * n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `calc(100% / ${n})`;
        square.style.height = `calc(100% / ${n})`;

        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#ccc";
        });

        gridContainer.appendChild(square);
    }
}

// -------------------------------
// RESET BUTTON
// -------------------------------
document.querySelector("#resetBtn").addEventListener("click", () => {
    let input = prompt("Number of squares per side (1–100):");

    if (input === null) return; // user cancelled
    input = parseInt(input);

    if (!Number.isInteger(input) || input < 1 || input > 100) {
        alert("Enter a number between 1 and 100.");
        return;
    }

    createGrid(input);
});
