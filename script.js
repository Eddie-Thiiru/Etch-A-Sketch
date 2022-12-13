const container = document.querySelector("#container");
const button = document.querySelector("#amountButton");

const grid = document.createElement("div");
grid.classList.add("square");

const fragment = new DocumentFragment();
for(let i = 0; i < 256; i++) {
    fragment.appendChild(grid.cloneNode(true));
}
container.appendChild(fragment);

function getNumber () {
    const answer = parseInt(prompt("Input the number of squares per side"));

    if (answer <= 100) {
        console.log(answer * answer);
        return answer * answer;
    } 
}

function getSquares(e) {
    const number = getNumber();
    const list = document.getElementById("container");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    const fragment = new DocumentFragment();
    for(let i = 0; i < number; i++) {
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