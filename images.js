let roadImage;
let characterImage; 
let ghostImage;
let celebration1;
let celebration2;
let carImage1;
let carImage2;
let carImage3;
let carImageList;

let gameSound;
let collisionSound;
let pointSound;


function preload() {
  roadImage = loadImage("imagens/estrada.png");
  characterImage = loadImage("imagens/ator-1.png");
  ghostImage = loadImage("imagens/ghost.png");
  celebration1 = loadImage("imagens/celebration.png");
  celebration2 = loadImage("imagens/celebration-2.png");
  carImage1 = loadImage("imagens/carro-1.png");
  carImage2 = loadImage("imagens/carro-2.png");
  carImage3 = loadImage("imagens/carro-3.png");
  carImageList = [carImage1, carImage2, carImage3, carImage1, carImage2, carImage3];


  gameSound = loadSound("sons/trilha.mp3");
  collisionSound = loadSound("sons/colidiu.mp3");
  pointSound = loadSound("sons/pontos.wav");
};