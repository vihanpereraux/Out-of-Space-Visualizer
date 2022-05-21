var counter = 0;
var value = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);
    // (x1, y1) = (0,0)
    // (x2, y2) = (6,0)
    // (x3, y3) = (3,6)
}

function draw(){
    fill(255, 0, 0);
    stroke(0);
    let mult = 10;
    translate(0, 0);
    angleMode(DEGREES);
    rotate(0);
    // [ (x2, y2), (x1,y1), (x3, y3) ] -> clockwise rotation for points
    triangle(100, 0, 0, 0, 50, 50);

    counter ++; console.log(counter);
    if(counter < 11){
        fill(255);
        stroke(0);
        translate(0,0);
        line(50, 50, random(0,150), windowHeight);
    }
}

function keyPressed(){
    if(value === 0){
        clear();
        counter = 0;
    }
}
