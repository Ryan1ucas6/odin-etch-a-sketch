const container = document.querySelector(".container");

const gridSize = 16;
const totalSquares = gridSize * gridSize;
const square = document.createElement("div");

for(let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "red"
    })

    const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
    square.style.backgroundColor = "#f2f2f2"
})
}

