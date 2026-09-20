const main = {
   view: document.getElementById("app"),
};

const screen = {
   x0: [0, 0, 0, 0, 0, 0, 0, 0],
   x1: [0, 0, 0, 0, 0, 0, 0, 0],
   x2: [0, 0, 0, 0, 0, 0, 0, 0],
   x3: [0, 0, 0, 0, 0, 0, 0, 0],
   x4: [0, 0, 0, 0, 0, 0, 0, 0],
   x5: [0, 0, 0, 0, 0, 0, 0, 0],
   x6: [0, 0, 0, 0, 0, 0, 0, 0],
   x7: [0, 0, 0, 0, 0, 0, 0, 0],
};

function updateView() {
   main.view.innerHTML = drawScreen();
}
updateView();

function drawScreen() {
   let currenctScreen = ""
   for (let row in screen) {
         console.log(row);
         currenctScreen += `<div>${screen[row]}</div>`;
   }
   console.log(currenctScreen);
   currenctScreen.replace("0", "1")
   return currenctScreen;
}
