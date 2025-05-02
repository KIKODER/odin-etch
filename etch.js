const container = document.querySelector("#container");
const reset = document.querySelector("#reset");

function generateGrid(numEntered) {
    const squareSize = 500 / numEntered;

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