const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    for ( let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        
        container.appendChild(grid);
    }
}







// let createDivs = function (num) {
//     for (i = 0; i <= num; i++) {
//         if (i = 16) {
//             return;
//         }
//     }
// }