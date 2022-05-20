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
    // [ (x2, y2), (x1,y1), (x3, y3) ]
    triangle(10, 0, windowWidth, 0, 40*mult, 40*mult)
}