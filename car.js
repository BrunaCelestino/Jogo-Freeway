let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [40, 96, 150, 210, 270, 318];
let carSpeeds = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carLength = 50;
let carHeight = 40;



function showCar() {
  for (let i = 0; i < carImageList.length; i++) {
    image(carImageList[i], xCars[i], yCars[i], carLength, carHeight);
  }
  
}

function moveCar() {
  for (let i = 0; i < carImageList.length; i++) {
    xCars[i] -= carSpeeds[i];
  }

}

function carReturn() {
  for (let i = 0; i < carImageList.length; i++) {
    if(checkIfCarReachedTheEdge(xCars[i])) {
      xCars[i] = 600;
    }
  }
}

function checkIfCarReachedTheEdge(xCar) {
  return xCar < -50

}

function increaseDifficult() {

if(characterPoints == 1) carSpeeds = [2.2, 2.7, 3.4, 5.2, 3.5, 2.5]
  
if(characterPoints == 2) carSpeeds = [2.4, 2.9, 3.6, 5.4, 3.7, 2.7]

if(characterPoints == 3) carSpeeds = [2.6, 3.1, 3.8, 5.6, 3.9, 2.9]

if(characterPoints == 4) carSpeeds = [2.8, 3.3, 4, 5.8, 4.1, 3.1]

if(characterPoints == 5) carSpeeds = [3.3, 5.8, 4.3, 5.9, 4.2, 6]

if(characterPoints == 6) carSpeeds = [4,  6, 6.2, 4.4, 5, 6.2]

if(characterPoints == 7) carSpeeds = [4.7,  4.2, 6.4, 4.5, 5.1, 7]

if(characterPoints == 8) carSpeeds = [8,  4.4, 6.5, 4.6, 5.2, 6]

if(characterPoints == 9) carSpeeds = [6, 4.6, 9, 4.7, 5.7, 6.2]

if(characterPoints == 10) carSpeeds = [6.4, 4.8, 7.1, 9.3, 8.2, 10]

}

