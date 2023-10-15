const container = document.getElementById('container');
const randomColor = document.getElementById('random');
const darkenColor = document.getElementById('darken');
const clear = document.getElementById('clear');
const eraser = document.getElementById('eraser');
const colorPicker = document.getElementById('color-picker');
const reset = document.getElementById('reset');

let sizeSlider = document.getElementById('range');
let value = document.getElementById('value');

value.textContent = sizeSlider.value;

sizeSlider.oninput = function() {
    container.innerHTML = '';
    value.textContent = this.value;
    createGrid(value.textContent)
}

reset.addEventListener('click', () => {
    container.innerHTML = '';
    sizeSlider.value = 16;
    value.textContent = sizeSlider.value;
    createGrid(16);
})

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

        colorPicker.addEventListener('click', () => {
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = colorPicker.value;
            })
        })

        randomColor.addEventListener('click', () =>{
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                grid.addEventListener('mouseover', () => {
                    grid.style.backgroundColor = "#" + randomColor;
                })
            })

        eraser.addEventListener('click', () => {
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = 'white';
            })
        })

        clear.addEventListener('click', () => {
            grid.style.backgroundColor = 'white';
        })
    }
}

function random() {
    let randomColor = "#" + ((1<<24) * Math.random()|0).toString(16);
    return randomColor;
}

createGrid(16);
