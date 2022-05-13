var y;
function setup() {
  createCanvas(windowWidth/2, windowHeight);
  y = 0;
}

function draw() {
  background(0);

  y = y +1;
  for (let i = 0; i < windowHeight; i++) {
    noFill();
    stroke(255);
    // frameRate(60);
    if (y < 100){
      bezier(10, i*25, 200, i*25+y, 300, i*25, windowWidth/2-10, i*25);
    }
    else{
      bezier(10, i*25, 200, i*25-y, 300, i*25, windowWidth/2-10, i*25);
      // y = y-1;
    }
    
  }
}
