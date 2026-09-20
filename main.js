const main = {
   view: document.getElementById("app"),
};

const screen = {};
const screenSetup = {
   width: 32,
   height: 32,
};
createRow();

function updateView() {
   main.view.innerHTML = drawScreen();
}
updateView();

function drawScreen() {
   let currentScreen = "";
   for (let row in screen) {
      currentScreen += `<div class="row">`;
      for (let column of screen[row]) {
         currentScreen += `<span class="pixel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
      }
      currentScreen += `</div>`;
   }
   currentScreen = currentScreen.replaceAll(",", "");
   return currentScreen;
}

function createRow() {
   for (let i = 0; i < screenSetup.height; i++) {
      screen[i] = createColumn();
      console.log(screen);
   }
}

function createColumn() {
   let currentArray = [];
   for (let i = 0; i < screenSetup.width; i++) {
      currentArray.push(0);
   }
   return currentArray;
}
