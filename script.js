const grid = document.querySelector('#grid');
var gridWidth = 16;
var gridHeight = 16;
const newGridButton = document.querySelector('#newDimensions');
// queries new grid dimensions, throws error and exits function if invalid.
newGridButton.addEventListener('click', () => {
  let widthChoice = parseInt(prompt('Please enter width between 1 and 100'));
  if (widthChoice > 100)  {
    alert('Whoops, too large!');
    return;
  }
  else if (widthChoice < 1) {
    alert('Number is less than 1');
    return;
  }  
  else if (widthChoice > 0 && widthChoice < 101) {
    gridWidth = widthChoice;
  }
  else if (widthChoice !== Number) {
    alert(`That isn't a valid number, silly!`);
    return;
  }

  let heightChoice = parseInt(prompt(`Your current grid with is ${gridWidth}. Now select your grid's new height, between 1 and 100.`));
  if (heightChoice > 100)  {
    alert('Whoops, too large!');
    return;
  }
  else if (heightChoice < 1) {
    alert('Number is less than 1');
    return;
  }  
  else if (heightChoice > 0 && heightChoice < 101) {
    gridHeight = heightChoice;
  }
  else if (heightChoice !== Number) {
    alert(`That isn't a valid number, silly!`);
    return;
  }
  // Resets the grid to all blanks with the 'item' class:
  resetButton.addEventListener('click', () => {
    gridItem.forEach(element => {
      element.setAttribute('class', 'item');
    })
  });
  // deletes all existing 'item' divs:  
  grid.innerHTML="";
  // draws new grid, gives it all the mouseover effect:
  drawGrid();
  // gives it all the mouseover effect:
  let newItems = document.querySelectorAll('.item');
  function listenForHoverAgain() {
    newItems.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.setAttribute('class', 'active');
      });
    });
    };
    listenForHoverAgain(); 
    var gridItem = document.querySelectorAll('.item');
    var x = document.getElementById
      });

function drawGrid() {
  console.log(gridHeight);
  console.log(gridWidth);
for (let i = 0; i < (gridWidth*gridHeight); i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('class','item');
    grid.style.gridTemplateColumns=`repeat(${gridWidth}, auto)`;
    grid.style.columnCount = gridWidth;
    grid.style.rowCount = gridHeight;
    let itemWidth = 500/gridWidth;
    let itemHeight = 500/gridHeight;
    gridItem.style.width=itemWidth;
    gridItem.style.width=itemHeight;
    grid.appendChild(gridItem);
    
  }
  
}
drawGrid();

var gridItem = document.querySelectorAll('.item');

// change color on mouseover
function listenForHover() {
gridItem.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.setAttribute('class', 'active');
  });
});
};
listenForHover();
//reset button
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
  gridItem.forEach(element => {
    element.setAttribute('class', 'item');
  })
});