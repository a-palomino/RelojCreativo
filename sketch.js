//En este Sketch se ha programado un reloj creativo inspirado en las obras de Antoni Gaudí, especialmente en los mosaicos.

let mosaico; 
let clock;
let ojo;
function setup() {
  createCanvas(800,400);
  background(225,255,255);
  mosaico = new Mosaico(12,4,3);
  clock = new Clock();
  ojo = new Ojo();
  mosaico.createMosaico();
  stroke("white");
  strokeWeight(50);
}

function draw() {
  background(220);
  mosaico.createMosaico();
  //Clock.printHora();
  ojo.gestionarOjo();
}