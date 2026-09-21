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
   xAnchor: -1,
   yAnchor: -1,
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
         if (row === 4 + viewport.yAnchor && column === 4 + viewport.xAnchor) currentScreen += `<span class="tile character">${drawCharacter()}</span>`;
         else currentScreen += `<span class="tile">${drawTile(column, row)}</span>`;
         // currentScreen += `<span class="tile">${column}, ${row}</span>`;
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

function drawTile(column, row) {
   if (column < 0 || column > gameMap.width - 1 || row < 0 || row > gameMap.height - 1) return `<div class="void"></div>`;
   if (column === 0 || column === gameMap.width - 1) return "xxxx<br>xxxx";
   if (row === 0 || row === gameMap.height - 1) return "xxxx<br>xxxx";
   else return "0";
}

function drawCharacter() {
   return ":D";
}

function move(direction) {
   if (direction === "right" || direction === "ArrowRight") {
      if (viewport.xAnchor !== gameMap.width - viewport.width + 3) {
         viewport.xAnchor = viewport.xAnchor += 1;
      } else console.log("Boundary hit: right");
   }
   if (direction === "down" || direction === "ArrowDown") {
      if (viewport.yAnchor !== gameMap.height - viewport.height + 3) {
         viewport.yAnchor = viewport.yAnchor += 1;
      } else console.log("Boundary hit: bottom");
   }
   if (direction === "left" || direction === "ArrowLeft") {
      if (viewport.xAnchor !== 0 - 3) {
         viewport.xAnchor = viewport.xAnchor -= 1;
      } else console.log("Boundary hit: left");
   }
   if (direction === "up" || direction === "ArrowUp") {
      if (viewport.yAnchor !== 0 - 3) {
         viewport.yAnchor = viewport.yAnchor -= 1;
      } else console.log("Boundary hit: top");
   }
   updateView();
}

let keyPressed
addEventListener("keydown", (key) => {
   if (key.code === "ArrowLeft" || key.code === "ArrowRight" || key.code === "ArrowUp" || key.code === "ArrowDown") keyPressed = key.code;
});

function registerKey() {
   if (keyPressed === undefined) return console.log("no key");
   move(keyPressed);
   keyPressed = undefined;
}

setInterval(registerKey, 500);
