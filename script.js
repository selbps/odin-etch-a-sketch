const container = document.getElementById('container');
const randomColor = document.getElementById('random');
const darkenColor = document.getElementById('darken');
const clear = document.getElementById('clear');
const eraser = document.getElementById('eraser');
const colorPicker = document.getElementById('color-picker');

let sizeSlider = document.getElementById('range');
let value = document.getElementById('value');

value.textContent = sizeSlider.value;

sizeSlider.oninput = function() {
    container.innerHTML = '';
    value.textContent = this.value;
    createGrid(value.textContent)
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
            grid.style.backgroundColor = colorPicker.value;
        })

        eraser.addEventListener('click', () => {
            eraser.textContent = 'Draw';
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = 'white';
            })
            eraser.addEventListener('click', () => {
                grid.addEventListener('mouseover', () => {
                    grid.style.backgroundColor = colorPicker.value;
                })
                eraser.textContent = 'Eraser';
            })
        })

        clear.addEventListener('click', () => {
            grid.style.backgroundColor = 'white';
        })
    }
}

function restartGrid() {

}

function clearGrid() {

}

createGrid(16);
