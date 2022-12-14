const container = document.querySelector("#container");
const button = document.querySelector("#amountButton");
const clientWidth = document.getElementById("container").clientWidth;

const grid = document.createElement("div");
grid.classList.add("square");

const fragment = new DocumentFragment();
for(let i = 0; i < 256; i++) {
    fragment.appendChild(grid.cloneNode(true));
}
container.appendChild(fragment);

function funcPrompt () {
    const answer = parseInt(prompt("Enter the number of squares per side"));
    const defaultAnswer = 16;
    if (answer <= 100) {
        return answer;
    } else {
        alert("please enter a number below 100")
        return defaultAnswer;
    }
}

function getSquares(e) {
    const answer = funcPrompt();
    const squareHeight = (clientWidth / answer) + "px";
    const squareWidth = (clientWidth / answer) + "px";
    const number = answer * answer;

    const list = document.getElementById("container");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    const fragment = new DocumentFragment();
    for(let i = 0; i < number; i++) {
        grid.style.height = squareHeight;
        grid.style.width = squareWidth;
        fragment.appendChild(grid.cloneNode(true));
    }
    container.appendChild(fragment);
}

button.addEventListener("click", getSquares);

// event delegation for dynamically created squares
document.addEventListener("mouseover", function(e) {
    if(e.target.className === "square") {
        e.target.style.background = "blue";
    }
});