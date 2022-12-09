const container = document.querySelector("#container");
const grid = document.createElement("div");
grid.classList.add("squares");

const fragment = new DocumentFragment();
for(let i = 0; i < 256; i++) {
    fragment.appendChild(grid.cloneNode(true));
}
container.appendChild(fragment);

const div = document.querySelectorAll(".squares");

div.forEach(div => {
    div.addEventListener("mouseover", function (e) {
        e.target.style.background = "blue"; 
    });
});


