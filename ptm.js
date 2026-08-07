const levels = [
  
  // Level 1 - tutorial
  {
    maze: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 4
  },
  
  // Level 2 - tutorial
  {
    maze: [
      [1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 3
  },
  
  // Level 3
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 7
  },
  
  // Level 4
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 11
  },
  
  // Level 5
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 0, 0, 1, 1, 1, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 18
  },
  
  // Level 6
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 23
  },
  
  // Level 7
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 1, 1, 0, 1, 0, 1],
      [1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 27
  },
  
  // Level 8
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 21
  },
  
  // Level 9
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1],
      [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 33
  },
  
  // Level 10
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 26
  },
  
  // Level 11
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 40
  },
  
  // Level 12 (Boss)
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 56
  },
  
  // Level 13
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 46
  },
  
  // Level 14
  {
    maze: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: { row: 1, col: 1 },
    bestMoves: 55
  }
];


let interactor = document.querySelector('.interactor');

let currLevel = 0;
let maze; // = levels[currLevel];

let cells = [];

let totalMoves = 0;

// DOM work
let CELL_SIZE = 35;
let GAP = 2;
const MOVE_TIME = 40;

let playerLoc = {
  row: 1,
  col: 1,
  element: null
};

let isMoving = false;
let totalPaintableCells = 0;
let paintedCells = 0;

let board = document.querySelector('.board');

function createBoard() {
  const available = Math.min(window.innerWidth,
    window.innerHeight) * 0.95;
  
  let cols = levels[currLevel].maze[0].length;
  
  CELL_SIZE = available / (cols + 0.05 * (cols - 1));
  GAP = CELL_SIZE * 0.05;
  
  // work
  board.style.gridTemplateRows = `repeat(${maze.length}, ${CELL_SIZE}px)`;
  board.style.gridTemplateColumns = `repeat(${maze[0].length}, ${CELL_SIZE}px)`;
  board.style.gap = `${GAP}px`;
  
  for (let i = 0; i < maze.length; i++) {
    let row = [];
    
    for (let j = 0; j < maze[0].length; j++) {
      let div = document.createElement('div');
      
      if (maze[i][j] === 1) {
        div.classList.add("wall");
      } else {
        div.classList.add("path");
        totalPaintableCells++;
      }
      
      board.appendChild(div);
      row.push(div);
    }
    
    cells.push(row);
  }
}

function createPlayer() {
  let player = document.createElement('div');
  player.classList.add('player');
  player.style.height = `${CELL_SIZE}px`;
  player.style.width = `${CELL_SIZE}px`;
  player.style.transition = `transform ${MOVE_TIME + 10}ms linear`;
  
  playerLoc.element = player;
  
  board.appendChild(player);
}

/*
createBoard();
createPlayer();
paint(playerLoc);
*/

function renderPlayer() {
  let SIZE = CELL_SIZE + GAP;
  
  let x = (playerLoc.col * SIZE);
  let y = (playerLoc.row * SIZE);
  
  //  let player = document.querySelector('.player');
  playerLoc.element.style.transform = `translate(${x}px, ${y}px)`;
}

/*
renderPlayer(); */
let startTime; // = Date.now();

/* >===× MOVT HANDLER ×===< */
document.addEventListener("keydown", (e) => {
  
  if (e.key === "ArrowLeft") {
    slide("left");
  } else if (e.key === "ArrowRight") {
    slide("right");
  } else if (e.key === "ArrowUp") {
    slide("up");
  } else if (e.key === "ArrowDown") {
    slide("down");
  }
  
});

let startX;
let startY;
let endX;
let endY;

interactor.addEventListener("touchstart", (e) => {
  
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  
});

interactor.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;
  
  let dx = endX - startX;
  let dy = endY - startY;
  
  // horizontal movt
  if (Math.abs(dx) > Math.abs(dy)) {
    
    // positive val : 50 -> 120 [right]
    if (dx > 0) {
      slide("right");
      
      // negative val : 50 -> 20 [left]   
    } else {
      slide("left");
    }
    
    // vertical movt
  } else { // dy > dx
    
    // positive val : 50 -> 120 [down]
    if (dy > 0) {
      slide("down");
      
      // negative val : 50 -> 20 [up]
    } else {
      slide("up");
    }
  }
});


function slide(direction) {
  
  if (isMoving) return;
  
  isMoving = true;
  
  totalMoves++;
  
  // console.log(direction);
  let destination = findDestination(direction);
  let visits = destination.visits;
  
  /*
  playerLoc.row = destination.row;
  playerLoc.col = destination.col;
  
  renderPlayer(); */
  
  animateMovt(visits);
}

function findDestination(direction) {
  
  let visited = [];
  
  let tempCol = playerLoc.col;
  let tempRow = playerLoc.row;
  
  // up
  if (direction === "up") {
    while (maze[tempRow - 1][tempCol] != 1) {
      tempRow--;
      
      // paint record
      visited.push({
        row: tempRow,
        col: tempCol
      });
    }
    
    // down
  } else if (direction === "down") {
    while (maze[tempRow + 1][tempCol] != 1) {
      tempRow++;
      
      // paint record
      visited.push({
        row: tempRow,
        col: tempCol
      });
    }
    
    // right
  } else if (direction === "right") {
    while (maze[tempRow][tempCol + 1] != 1) {
      tempCol++;
      
      // paint record
      visited.push({
        row: tempRow,
        col: tempCol
      });
    }
    
    // left
  } else if (direction === "left") {
    while (maze[tempRow][tempCol - 1] != 1) {
      tempCol--;
      
      // paint record
      visited.push({
        row: tempRow,
        col: tempCol
      });
    }
  }
  
  // update player's obj now
  return {
    row: tempRow,
    col: tempCol,
    visits: visited
  }
}

async function animateMovt(path) {
  // console.log(visited);
  
  for (let i = 0; i < path.length; i++) {
    let current = path[i];
    
    playerLoc.row = current.row;
    playerLoc.col = current.col;
    
    renderPlayer();
    paint(current);
    await sleep(MOVE_TIME);
  }
  
  // end
  isMoving = false;
}

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

function paint(cell) {
  
  let row = cell.row;
  let col = cell.col;
  
  if (maze[row][col] !== 2) {
    if (maze[row][col] !== 1) {
      maze[row][col] = 2;
      cells[row][col].classList.add('painted' + (currLevel + 1));
      paintedCells++;
    }
  }
  
  checkWin();
}

function checkWin() {
  if (paintedCells === totalPaintableCells) {
    popupFunc();
  }
  // or just keep reducing the totalGaps and if it's 0 then announce winner
  // is this code checking for the cells only visited the first time ?
}

/* >==× \ RESET / ×==< */
function reset() {
  
  // maze ?
  board.innerHTML = "";
  cells = [];
  paintedCells = 0;
  totalPaintableCells = 0;
  totalMoves = 0;
  playerLoc.element = null;
  isMoving = false;
  
  playerLoc.row = 1;
  playerLoc.col = 1;
  
  // hide popup
  bgDiv.style.opacity = "0";
  
  setTimeout(() => {
    bgDiv.style.display = "none";
  }, 500);
  
  popupDiv.classList.remove("animated");
  
  // --- Stars reversal 
  allStars.forEach(s => {
    s.classList.remove('starAnimated')
  });
}

let bgDiv = document.querySelector('.bg');
let popupDiv = document.querySelector('.popup');

function popupFunc() {
  
  setDetails();
  
  // bg display
  bgDiv.style.display = "block";
  
  // bg visible
  setTimeout(() => {
    bgDiv.style.opacity = "1";
    
    // popup visible
    setTimeout(() => {
      popupDiv.classList.add("animated");
      setTimeout(() => {
        starsHandler();
      }, 300);
    }, 10);
  }, 700);
}

let movesDiv = document.querySelector(".moves");
let timeDiv = document.querySelector(".timeTaken");
let levelDiv = document.querySelector(".level");
let levelFinishedH = document.querySelector(".lvlFinH");
let bestMovesDiv = document.querySelector('.bestMovesDiv');

function setDetails() {
  movesDiv.textContent = totalMoves;
  timeDiv.textContent = getTimeTaken();
  levelFinishedH.textContent = `🎉 Level ${currLevel + 1} Finished`
  bestMovesDiv.textContent = `Best Moves ${levels[currLevel].bestMoves}`;
}

let allStars = document.querySelectorAll('.stars');

function starsHandler() {
  let starsEarned = 0;
  let bestMoves = levels[currLevel].bestMoves;
  // ---- grading ----
  if (totalMoves === bestMoves) {
    starsEarned = 3;
  } else if (totalMoves <= (bestMoves + 2)) {
    starsEarned = 2;
  } else if (totalMoves <= (bestMoves + 11)) {
    starsEarned = 1;
  }
  
  // ---- animating ----
  
  // max 0 -> 2 [0, 1, 2];
  for (let i = 0; i < starsEarned; i++) {
    
    allStars[i].style.animationDelay = `${i * 0.5}s`;
    allStars[i].style.transitionDelay = `${i * 0.5}s`;
    allStars[i].classList.add('starAnimated');
    
  }
}

function getTimeTaken() {
  let endTime = Date.now();
  let mins = 0;
  let secs = 0;
  let timeTaken = Math.floor((endTime - startTime) / 1000);
  
  
  mins = Math.floor(timeTaken / 60);
  secs = timeTaken % 60;
  
  let minStr = String(mins).padStart(2, "0");
  let secStr = String(secs).padStart(2, "0");
  
  return minStr + ":" + secStr;
}

let currLvl = document.querySelector('.nextLvl');

function loadLevel(currLevel) {
  maze = levels[currLevel].maze.map(row => [...row]);
  
  if (currLevel + 2 > levels.length) {
    currLvl.textContent = `All Levels are Finished`;
  } else {
    currLvl.textContent = `Next Level: ${currLevel + 2}`;
  }
  
  levelDiv.textContent = currLevel + 1;
  
  reset();
  
  playerLoc.row = levels[currLevel].start.row;
  playerLoc.col = levels[currLevel].start.col;
  
  createBoard();
  createPlayer();
  renderPlayer();
  paint(playerLoc);
  
  startTime = Date.now();
}

/* >===+ HEART +===< */
loadLevel(currLevel);

let replayBtn = document.querySelector('.replay');
let nextLvlBtn = document.querySelector('.next');

replayBtn.addEventListener('click', () => {
  if (isMoving) {
    alert("plz wait a moment before proceeding")
    return;
  }
  
  loadLevel(currLevel);
});

let lastBg = document.querySelector('.finalBg');
let lastPopup = document.querySelector('.finalPopup');
let replayGameBtn = document.querySelector('.finalBtn');

nextLvlBtn.addEventListener('click', () => {
  if (isMoving) {
    alert("plz wait a moment before proceeding")
    return;
  }
  
  currLevel++;
  
  if (currLevel >= levels.length) {
    finalPopup();
    return;
  }
  
  // Casual continue 
  loadLevel(currLevel);
});

function finalPopup() {
  // alert("You have finished all the levels");
  
  lastBg.style.display = "block";
  
  // bg visible
  setTimeout(() => {
    lastBg.style.opacity = "1";
    
    // popup visible
    setTimeout(() => {
      lastPopup.classList.add("animated");
    }, 10);
  }, 700);
  
  // LAST LEVEL TRIGGER
  replayGameBtn.addEventListener('click', () => {
    
    lastBg.style.opacity = "0";
    
    setTimeout(() => {
      lastBg.style.display = "none";
    }, 500);
    
    lastPopup.classList.remove("animated");
    
    // RESTART
    currLevel = 0;
    loadLevel(currLevel);
  });
}

// ---- CLOSE THE MANUAL 
document.querySelector(".manualBtn").onclick = () => {
  document.querySelector(".manualBg").style.display = "none";
};
