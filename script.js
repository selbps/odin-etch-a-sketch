const container = document.getElementById('container');

let sizeSlider = document.getElementById('range');
let value = document.getElementById('value');

value.textContent = sizeSlider.value;

sizeSlider.oninput = function() {
    value.textContent = this.value;
}

function createGrid(size) {
    // create the dimensions of the container: createDivs(4) creates a 4x4 container
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        
        container.appendChild(grid);
        
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'green';
        })
    }
}

function restartGrid() {
    sizeSlider.value === 0
}

function clearGrid() {

}

createGrid(40);
