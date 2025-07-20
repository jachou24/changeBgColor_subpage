const colors = [
    "#FFBAED", // Pastel Pink
    "#FFBACD",  // Pastel Rose
    "#FFB3BA", // Pastel Red
    "#FFDFBA", // Pastel Orange
    "#FFFFBA", // Pastel Yellow
    "#E6FFBA", // Pastel Lime
    "#BAFFC9", // Pastel Green
    "#BAFFFF", // Pastel Cyan
    "#BAE1FF", // Pastel Blue
    "#D5BAFF" // Pastel Indigo/Violet
  ];

const darkerColors = [
    "#cc8cb8", // Darker Pastel Pink
    "#cc8c9f",  // Darker Pastel Rose
    "#cc8c8f", // Darker Pastel Red
    "#ccb08c", // Darker Pastel Orange
    "#cccc8c", // Darker Pastel Yellow
    "#b8cc8c", // Darker Pastel Lime
    "#8ccc9f", // Darker Pastel Green
    "#8ccccc", // Darker Pastel Cyan
    "#8cc6cc", // Darker Pastel Blue
    "#b08ccc" // Darker Pastel Indigo/Violet
  ];

  function getColor(num){
    return darkerColors[num];
  }
  
/*
function changeBackground(clickedButton) {
    const inlineBgColor = clickedButton.style.backgroundColor;
    const changeColor = 2;
    const decimalNum = parseInt(inlineBgColor, 16);
    const sumDecimal = decimalNum - changeColor;
    const sumHex = sumDecimal.toString(16);
    document.body.style.backgroundColor = sumHex;
  }
*/

function changeBackground(clickedButton) {
    // Get computed style if inline style isn't set
    const computedStyle = window.getComputedStyle(clickedButton);
    const bgColor = computedStyle.backgroundColor;
  
    // Convert RGB to hex
    const rgb = bgColor.match(/\d+/g);
    if (!rgb || rgb.length < 3) return;
  
    // Decrease each color component by 2 (with floor of 0)
    const adjustedColor = rgb.map(num => {
      const val = Math.max(0, parseInt(num) + 40);
      return val.toString(16).padStart(2, '0');
    }).join('');
  
    document.documentElement.style.setProperty('--my-background-color', `#${adjustedColor}`); 

  }

function showColorButtons() {

    const bgColorContainer = document.getElementById('bgColorContainer');
    const colorNameList = ['pink', 'rose', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'violet'];
    const numberOfButtons = colorNameList.length;

    for (let i = 0; i < numberOfButtons; i++) {
        const colButton = document.createElement('button');
        colButton.textContent = colorNameList[i];
        colButton.className = "standardButton";
        colButton.style.backgroundColor = getColor(i);
        colButton.addEventListener('click', function () {changeBackground(this);});
        bgColorContainer.appendChild(colButton);
    }
}