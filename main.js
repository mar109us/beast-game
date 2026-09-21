const main = {
   view: document.getElementById("app"),
};

const screen = {};
const gameMap = {
   width: 20,
   height: 18,
};
const viewport = {
   width: 9,
   height: 9,
   xAnchor: 0,
   yAnchor: 0,
};

createRow();

function updateView() {
   main.view.innerHTML = drawScreen();
}
updateView();

function drawScreen() {
   let currentScreen = "";
   currentScreen += createButtons();
   currentScreen += `<div class="viewport">`;
   for (let row = viewport.yAnchor; row < viewport.height + viewport.yAnchor; row++) {
      currentScreen += `<div class="row">`;
      for (let column = viewport.xAnchor; column < viewport.width + viewport.xAnchor; column++) {
         // currentScreen += `<span class="pixel">${column}, ${row}</span>`;
         currentScreen += `<span class="pixel">${drawTile(column,row)}</span>`;
      }
      currentScreen += `</div>`;
   }
   currentScreen += `</div>`;
   return currentScreen;
}

function createButtons() {
   return `
   <div class="buttons">
      <div>
         <button onclick="move('up')">up</button>
      </div>
      <div>
         <button onclick="move('left')">left</button>
         <button onclick="move('down')">down</button>
         <button onclick="move('right')">right</button>
      </div>
   </div>`;
}

function createRow() {
   for (let i = 0; i < gameMap.height; i++) {
      screen[i] = createColumn();
   }
}

function createColumn() {
   let currentArray = [];
   for (let i = 0; i < gameMap.width; i++) {
      currentArray.push(i);
   }
   return currentArray;
}

function drawTile(column,row) {
   if (column === 0 || column === gameMap.width - 1) return "xxxx<br>xxxx"
   if (row === 0 || row === gameMap.height - 1) return "xxxx<br>xxxx"
   else return "0"
}

function move(direction) {
   if (direction === "right") {
      if (viewport.xAnchor !== gameMap.width - viewport.width) {
         viewport.xAnchor = viewport.xAnchor += 1;
      } else console.log("Boundary hit: right");
   }
   if (direction === "down") {
      if (viewport.yAnchor !== gameMap.height - viewport.height) {
         viewport.yAnchor = viewport.yAnchor += 1;
      } else console.log("Boundary hit: bottom");
   }
   if (direction === "left") {
      if (viewport.xAnchor !== 0) {
         viewport.xAnchor = viewport.xAnchor -= 1;
      } else console.log("Boundary hit: left");
   }
   if (direction === "up") {
      if (viewport.yAnchor !== 0) {
         viewport.yAnchor = viewport.yAnchor -= 1;
      } else console.log("Boundary hit: top");
   }
   updateView();
}
