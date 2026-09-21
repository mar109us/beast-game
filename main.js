const main = {
   view: document.getElementById("app"),
};

const screen = {};
const screenSetup = {
   width: 16,
   height: 16,
};
const viewport = {
   width: 4,
   height: 4,
};

createRow();

function updateView() {
   main.view.innerHTML = drawScreen();
}
updateView();

function drawScreen() {
   let currentScreen = "";
   currentScreen += createButtons();
   currentScreen += `<div class="viewport">`
   for (let row = 0; row < viewport.height; row++) {
      currentScreen += `<div class="row">`;
      for (let column = 0; column < viewport.width; column++) {
         currentScreen += `<span class="pixel">${column}</span>`;
      }
      currentScreen += `</div>`;
   }
   currentScreen += `</div>`
   return currentScreen;
}

function createButtons() {
   return `
   <div class="buttons">
      <div>
         <button id="move-up">up</button>
      </div>
      <div>
         <button id="move-left">left</button>
         <button id="move-down">down</button>
         <button id="move-right">right</button>
      </div>
   </div>`;
}

function createRow() {
   for (let i = 0; i < screenSetup.height; i++) {
      screen[i] = createColumn();
   }
}

function createColumn() {
   let currentArray = [];
   for (let i = 0; i < screenSetup.width; i++) {
      currentArray.push(i);
   }
   return currentArray;
}
