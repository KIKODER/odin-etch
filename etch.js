const container = document.querySelector("#container");

let numEntered = prompt("Enter a number between 1 and 100.");
numEntered = Math.min(Math.max(parseInt(numEntered), 1), 100); // clamp between 1 and 100

const totalSize = 90; // using 90vw and 90vh as max container size
const squareSize = totalSize / numEntered;

for (let i = 0; i < numEntered * numEntered; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}vw`;
    square.style.height = `${squareSize}vh`;
    container.appendChild(square);
}

