const container = document.querySelector("#container");

//let numEntered = prompt("Enter a number between 1-100.");
//let size = numEntered * numEntered;

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

//console.log(size);