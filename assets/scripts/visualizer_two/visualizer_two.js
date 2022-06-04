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

var bgLowFrequencyColor, bgHighFrequencyColor;
var beziarLowFrequencyColor, beziarHighFrequencyColor;


function preload(){
  sound = loadSound("Glitch.mp3")
}

function setup() {
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
  document.getElementById("waveLength").value = ((waveHeight*100).toFixed(5));

  if (waveHeight < 0.35){
    bgLowFrequencyColor = color(localStorage.getItem("bgLowFrequencyColor"));
    background(bgLowFrequencyColor);
    calmMind();
  }
  else{
    bgHighFrequencyColor = color(localStorage.getItem("bgHighFrequencyColor"));
    background(bgHighFrequencyColor);
    disturbedMind();  
  }
}


function calmMind(){
  y = y +1;
  for (let i = 0; i < windowHeight; i++) {
    if (y < 500){
      noFill();
      strokeWeight(1);
      smooth();

      if (i%2 == 0){
        beziarLowFrequencyColor = color(localStorage.getItem("beziarLowFrequencyColor"));
        stroke(beziarLowFrequencyColor);
        bezier(0, (i*leftGap), firstBend, i*firstPointGap+y, secondBend, i*secondPointGap-y, windowWidth, (i*rightGap));
      }
      else{
        beziarLowFrequencyColor = color(localStorage.getItem("beziarLowFrequencyColor"));
        stroke(beziarLowFrequencyColor);
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
        beziarHighFrequencyColor = color(localStorage.getItem("beziarHighFrequencyColor"));
        stroke(beziarHighFrequencyColor);
        //bezier(0, i*disturbedLeftGap, random(disturbedFirstBend, disturbedFirstBend+50), random(i*disturbedFirstPointGap+y, (i*disturbedFirstPointGap+y+70)), random(disturbedSecondBend, disturbedSecondBend+50), random(i*disturbedSecondPointGap-y, (i*disturbedSecondPointGap-y+70)), windowWidth, i*disturbedRightGap);
        bezier(0, random(i*disturbedLeftGap), random(disturbedFirstBend), i*disturbedFirstPointGap+y, random(disturbedSecondBend, disturbedSecondBend-100), i*disturbedSecondPointGap-y, windowWidth, random(i*disturbedRightGap));
        // bezier(0, i*disturbedLeftGap, (disturbedFirstBend), i*disturbedFirstPointGap+y, (disturbedSecondBend), i*disturbedSecondPointGap-y, windowWidth, i*disturbedRightGap);
      }
      else{
        beziarHighFrequencyColor = color(localStorage.getItem("beziarHighFrequencyColor"));
        stroke(beziarHighFrequencyColor);
        // bezier(0, i*disturbedLeftGap, random(disturbedFirstBend, disturbedFirstBend+50), random(i*disturbedFirstPointGap+y, (i*disturbedFirstPointGap+y+70)), random(disturbedSecondBend, disturbedSecondBend+50), random(i*disturbedSecondPointGap-y, (i*disturbedSecondPointGap-y+70)), windowWidth, i*disturbedRightGap);
        // bezier(0, random(i*disturbedLeftGap), random(disturbedFirstBend), i*disturbedFirstPointGap+y, random(disturbedSecondBend, disturbedSecondBend-100), i*disturbedSecondPointGap-y, windowWidth, random(i*disturbedRightGap));
        // bezier(0, i*disturbedLeftGap, (disturbedFirstBend), i*disturbedFirstPointGap+y, (disturbedSecondBend), i*disturbedSecondPointGap-y, windowWidth, i*disturbedRightGap);
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