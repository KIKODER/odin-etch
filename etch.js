const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const clear = document.querySelector("#clear");

function generateGrid(numEntered) {
    const squareSize = 600 / numEntered;

    for (let i = 0; i < numEntered * numEntered; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'gray';
        });
    }
}

let numEntered = prompt("Enter a number between 1 and 100.");
numEntered = Math.min(Math.max(parseInt(numEntered), 1), 100);  // clamp between 1 and 100
generateGrid(numEntered);

reset.addEventListener("click", () => {
    document.querySelector("#container").innerHTML = "";
    let numEntered = prompt("Enter a number between 1 and 100.");
    generateGrid(numEntered);
});

clear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white"; // or your original background color
    });
});