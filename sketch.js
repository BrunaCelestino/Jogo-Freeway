function setup() {
  createCanvas(500, 400);
  gameSound.loop();
}

function draw() {
  background(roadImage);
  showCharacter();
  showCar();
  moveCar();
  moveCharacter();
  carReturn();
  collisionVerify();
  includePoints();
  scorePoints();
  increaseDifficult();
}



