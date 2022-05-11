const grid = document.querySelector('.grid');

for (let i = 1; i <= (16*16); i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('id','item');
    grid.appendChild(gridItem);
  }

document.getElementById('item').addEvenetListener('mouseover', hover);

function hover(){
    document.getElementById('item').style.backgroundcolor="black";
}