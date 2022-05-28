var y;
var calmSelection = true;
var disturbedSelection = false;
var sound;
var amp;


function preload(){
  sound = loadSound("Glitch.mp3")
}

function setup() {
  let removal = 0;
  // createCanvas(windowWidth/2, 500);
  createCanvas(1200, 900)
  amp = new p5.Amplitude();
  y = 0;
}

function draw() {
  background(0);
  frameRate(30);
  var waveHeight = amp.getLevel();

  if (waveHeight < 0.35){
    calmMind()
  }
  else{
    disturbedMind()  
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    calmSelection = false;
    disturbedSelection = true;
  } 
  else if (keyCode === RIGHT_ARROW) {
    calmSelection = true;
    disturbedSelection = false;
  }
}

function calmMind(){
  y = y +1;
  for (let i = 0; i < windowHeight; i++) {
    if (y < 500){
      noFill();
      strokeWeight(2);
      smooth();
      if (i%2 == 0){
        stroke(220);
        // bezier(10, i*25, random(200), i*25+y, random(500,650), i*25-y, windowWidth/2-10, i*25);
        bezier(10, i*25, 300, i*25+y, 300, i*25-y, 1200, i*25);
      }
      else{
        stroke(255);
        bezier(10, i*25, 300, i*25+y, 300, i*25-y, 1200, i*25);
      }
    }
    else{
      y = -500;
    } 
  } 
}

function disturbedMind(){
  y = y +1;
  for (let i = 0; i < windowHeight; i++) {
    if (y < 500){
      noFill();
      strokeWeight(2);
      smooth();
      if (i%2 == 0){
        stroke(255,0,0);
        // bezier(10, i*25, random(200, 250), random(i*25+y, (i*25+y+70)), random(300, 350), random(i*25-y, (i*25-y+70)), windowWidth/2-10, i*25);
        bezier(10, random(i*25), random(200), i*25+y, random(500,650), i*25-y, 1200, random(i*25));
        // bezier(10, i*25, 200, i*25+y, 300, i*25-y, windowWidth/2-10, i*25);
      }
      else{
        stroke(220);
        // bezier(10, i*25, random(200, 250), random(i*25+y, (i*25+y+70)), random(300, 350), random(i*25-y, (i*25-y+70)), windowWidth/2-10, i*25);
        // bezier(10, random(i*25), random(200), i*25+y, random(500,650), i*25-y, windowWidth/2-10, random(i*25));
        // bezier(10, i*25, 200, i*25+y, 300, i*25-y, windowWidth/2-10, i*25);
      }
    }
    else{
      y = -500;
    } 
  } 
}

function disturbedMind2(){
  y = y +1;
  for (let i = 0; i < windowHeight; i++) {
    if (y < 500){
      noFill();
      strokeWeight(2);
      smooth();
      if (i%2 == 0){
        stroke(255,0,0);
        // bezier(10, i*25, random(200), i*25+y, random(500,650), i*25-y, windowWidth/2-10, i*25);
        bezier(10, i*25, 200, i*25+y, 300, i*25-y, windowWidth/2-10, i*25);
      }
      else{
        stroke(255,0,0);
        bezier(10, i*25, 200, i*25+y, 300, i*25-y, windowWidth/2-10, i*25);
      }
    }
    else{
      y = -500;
    } 
  } 
}

function keyPressed(){
  sound.play()
}