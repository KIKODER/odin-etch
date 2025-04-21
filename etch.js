const container = document.querySelector("#container");

let numEntered = prompt("Enter a number between 1-100.");
let sizeGrid = numEntered * numEntered;

let pageSize = 100;
let sizeSquare = pageSize / numEntered;

for (let i = 0; i < sizeGrid; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${sizeSquare}vw`;
    square.style.height = `${sizeSquare}vh`;
    container.appendChild(square);
}

console.log(sizeGrid);
