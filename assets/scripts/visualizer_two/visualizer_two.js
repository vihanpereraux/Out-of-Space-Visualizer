var y;
var calmSelection = true;
var disturbedSelection = false;
var sound;
var amp;

var leftGap, disturbedLeftGap;
var rightGap, disturbedRightGap;
var firstPointGap, disturbedFirstPointGap;
var secondPointGap, disturbedSecondPointGap;
var firstBend, disturbedFirstBend;
var secondBend, disturbedSecondBend;


function preload(){
  sound = loadSound("Glitch.mp3")
}

function setup() {
  let removal = 0;
  // createCanvas(windowWidth/2, 500);
  createCanvas(windowWidth, windowHeight)
  amp = new p5.Amplitude();
  y = 0;
}

function draw() {
  background(0);
  frameRate(30);

  // varaibles panel properties
  leftGap = localStorage.getItem("leftGap");
  rightGap = localStorage.getItem("rightGap");
  firstPointGap = localStorage.getItem("firstPointGap");
  secondPointGap = localStorage.getItem("secondPointGap");
  firstBend = localStorage.getItem("firstBend");
  secondBend = localStorage.getItem("secondBend");

  // varaibles panel properties - disturbed mind
  disturbedLeftGap = localStorage.getItem("disturbedLeftGap");
  disturbedRightGap = localStorage.getItem("disturbedRightGap");
  disturbedFirstPointGap = localStorage.getItem("disturbedFirstPointGap");
  disturbedSecondPointGap = localStorage.getItem("disturbedSecondPointGap");
  disturbedFirstBend = localStorage.getItem("disturbedFirstBend");
  disturbedSecondBend = localStorage.getItem("disturbedSecondBend");

  var waveHeight = amp.getLevel();

  if (waveHeight < 0.35){
    background(0);
    calmMind();
  }
  else{
    background(255);
    disturbedMind();  
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
        bezier(0, (i*leftGap), firstBend, i*firstPointGap+y, secondBend, i*secondPointGap-y, windowWidth, (i*rightGap));
      }
      else{
        stroke(255);
        bezier(0, (i*leftGap), firstBend, i*firstPointGap+y, secondBend, i*secondPointGap-y, windowWidth, (i*rightGap));
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
        // bezier(0, i*leftGap, random(firstBend, firstBend+50), random(i*firstPointGap+y, (i*firstPointGap+y+70)), random(secondBend, secondBend+50), random(i*secondPointGap-y, (i*secondPointGap-y+70)), windowWidth, i*rightGap);
        // bezier(0, random(i*leftGap), random(firstBend), i*firstPointGap+y, random(secondBend, secondBend-100), i*secondPointGap-y, windowWidth, random(i*rightGap));
        bezier(0, i*disturbedLeftGap, (disturbedFirstBend), i*disturbedFirstPointGap+y, (disturbedSecondBend), i*disturbedSecondPointGap-y, windowWidth, i*disturbedRightGap);
      }
      else{
        stroke(255,0,0);
        // bezier(0, i*leftGap, random(firstBend, firstBend+50), random(i*firstPointGap+y, (i*firstPointGap+y+70)), random(secondBend, secondBend+50), random(i*secondPointGap-y, (i*secondPointGap-y+70)), windowWidth, i*rightGap);
        // bezier(0, random(i*leftGap), random(firstBend), i*firstPointGap+y, random(secondBend, secondBend-100), i*secondPointGap-y, windowWidth, random(i*rightGap));
        bezier(0, i*leftGap, (firstBend), i*firstPointGap+y, (secondBend), i*secondPointGap-y, windowWidth, i*rightGap);
      }
    }
    else{
      y = -500;
    } 
  } 
}


function keyPressed(){
  if(keyCode === 80){
    sound.play();
  }
  if(keyCode === 77){
    sound.stop()
  }
}