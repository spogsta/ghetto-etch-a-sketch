const container = document.getElementById("container");


let gridSquare = 16;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(gridSquare, gridSquare);

function clearAll () {
    var element = document.getElementsByClassName("my-color-class")
    while (element.length)
    element[0].classList.remove("my-color-class");
}

function newGrid (){
    container.innerHTML = "";
    gridSquare = prompt("enter a new gridsquare number under 64")
    if (gridSquare<0 || isNaN(gridSquare) || gridSquare > 64) {
        newGrid()
    }
    makeRows(gridSquare, gridSquare);
}
