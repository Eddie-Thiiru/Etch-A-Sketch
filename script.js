const container = document.querySelector("#container");
const grid = document.createElement("div");
grid.classList.add("columns");

const fragment = new DocumentFragment();
for(let i = 0; i < 256; i++) {
    fragment.appendChild(grid.cloneNode(true));
}

container.appendChild(fragment);

