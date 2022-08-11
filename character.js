let yCharacter = 370;
let xCharacter = 85;

let yGhost;
let xGhost;

let yCelebration1;
let xCelebration1;

let yCelebration2;
let xCelebration2;

let characterPoints = 0;

let collision = false; 

function showCharacter() {
  image(characterImage, xCharacter, yCharacter, 30, 30); 
}

function showGhost(){
  yGhost = yCharacter - 25
  xGhost = xCharacter - 21
  image(ghostImage, xGhost, yGhost, 70, 75);
  
}

function moveCharacter() {
  if(keyIsDown(UP_ARROW)) {
    yCharacter -= 3; 
  }

  if(keyIsDown(DOWN_ARROW)) {
    if(canMove()){
      yCharacter += 3; 
    }
  }

}
function collisionVerify() {

  for(let i = 0; i < carImageList.length; i ++) {
    collision = collideRectCircle(xCars[i], yCars[i], carLength, carHeight, xCharacter, yCharacter, 15);
    
    if(collision) {
      collisionSound.play();
      showGhost();
      setTimeout(returnCharacter, 250)
      losePoints();
      
  }

  }
}

function returnCharacter() {
  
  yCharacter = 370;
}

function includePoints() {
  textAlign(CENTER)
  textSize(25);
  fill(color(255, 240, 60))
  text(characterPoints, width/5, 27);
}

function celebrate() {
  yCelebration1 = yCharacter - 14
  xCelebration1 = xCharacter + 20

  yCelebration2 = yCharacter - 20
  xCelebration2 = xCharacter - 42
  image(celebration1, xCelebration1, yCelebration1, 50, 55);
  image(celebration2, xCelebration2, yCelebration2, 50, 55);
}
function scorePoints() {
  if(yCharacter == 16) {
    celebrate()
  }
  if(yCharacter < 15) {
    
    setTimeout(returnCharacter, 10)
    pointSound.play();
    characterPoints += 1;

  }
}

function losePoints() {
  if(pointsGreaterThanZero()) {
    characterPoints -= 1;
  }
}
function pointsGreaterThanZero() {
  return characterPoints > 0
}

function canMove() {
  return yCharacter < 370;
}


