// CIS4004 Week 5: Basic Javacript
// Ashley Knecht

function tickUp() {
  const counterTick = document.getElementById("counter");
  let counter = parseInt(counterTick.textContent, 10);
  counter++;
  counterTick.textContent = counter;
}

function tickDown() {
  const counterTick = document.getElementById("counter");
  let counter = parseInt(counterTick.textContent, 10);
  counter--;
  counterTick.textContent = counter;
}

function runForLoop() {
  const counter = parseInt(document.getElementById("counter").textContent, 10);
  const resultEl = document.getElementById("forLoopResult");
  let output = "";
  for (let i = 0; i <= counter; i++) {
    output += i + (i === counter ? "" : " ");
  }
  resultEl.textContent = output;
}

function showOddNumbers() {
  const counter = parseInt(document.getElementById("counter").textContent, 10);
  const result = document.getElementById("oddNumberResult");
  let output = "";
  for (let i = 1; i <= counter; i += 2) {
    output += i + (i + 2 > counter ? "" : " ");
  }
  result.textContent = output;
}

function addMultiplesToArray() {
  const counter = parseInt(document.getElementById("counter").textContent, 10);
  const arr = [];

  if (counter < 5) {
    console.log(arr);
  }

  else {
    for (let i = 5; i <= counter; i += 5) {
      arr.unshift(i); 
    }
    console.log(arr); 
  }
}

function printCarObject() {
  const carType = document.getElementById("carType").value;
  const carMPG = document.getElementById("carMPG").value;
  const carColor = document.getElementById("carColor").value;

  const car = { carType, carMPG, carColor };
  console.log(car);
}

function loadCar(carNumber) {
  let selectedCar;
  if (carNumber === 1) selectedCar = carObject1;
  else if (carNumber === 2) selectedCar = carObject2;
  else if (carNumber === 3) selectedCar = carObject3;
  else return;

  document.getElementById("carType").value = selectedCar.cType;
  document.getElementById("carMPG").value = selectedCar.cMPG;
  document.getElementById("carColor").value = selectedCar.cColor;
}

function changeColor(colorNumber) {
  const p = document.getElementById("styleParagraph");
  if (colorNumber === 1) p.style.color = "red";
  else if (colorNumber === 2) p.style.color = "green";
  else if (colorNumber === 3) p.style.color = "blue";
}
