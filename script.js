const grid = document.querySelector('#grid');
const gridWidth = 16;
const gridHeight = 16;
function drawGrid() {
for (let i = 0; i < (gridWidth*gridHeight); i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('id','item');
    grid.appendChild(gridItem);
  }
}
drawGrid();