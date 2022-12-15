const container = document.querySelector("#container");
const button = document.querySelector("#amountButton");
const clientWidth = document.getElementById("container").clientWidth;

const grid = document.createElement("div");
grid.classList.add("square");
grid.dataset.count = 0;

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

function changeColor(e) {
    if(e.target.className === "square") {
        let array = [];
        let count = parseInt(e.target.dataset.count) + 1; 
            e.target.dataset.count = count;
          
        if (count === 1) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 255) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;
             
        }else if (count === 2) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 230) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        }else if (count === 3) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 204) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        }else if (count === 4) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 179) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        }else if (count === 5) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 153) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        }else if (count === 6) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 128) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        }else if (count === 7) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 102) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        }else if (count === 8) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 77) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        }else if (count === 9) {
            for (let i = 0; i < 3; i++) {
                const randomColor = Math.floor(Math.random() * 51) + 1;
                array.push(randomColor);
            }
            let color = "rgb("   + array.join() + ")";
                e.target.style.background = color;

        } else if (count >= 10){
            e.target.style.background = "rgb(0, 0, 0)";
        }
    }
}

button.addEventListener("click", getSquares);

// event delegation for dynamically created squares
document.addEventListener("mouseover", changeColor);