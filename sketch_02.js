var counter = 0;
var value = 0;
var x1, x2, x3, y1, y2, y3;
var xX, yY;
var d;
var k;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    angleMode(DEGREES);
    counter = 0;
    
    // basic cordinates of triangle
    // (x1, y1) = (0,0)
    // (x2, y2) = (6,0)
    // (x3, y3) = (3,6)
    x1 = 450; y1 = 0;
    x2 = 550+x1; y2 = 0;
    x3 = ((x2-x1)/2)+x1; y3 = ((x2-x1)/2)*tan(60); // ((x2-x1)/2)+x1 -- ((x2-x1)/2)*tan(60) 

    d = (((x2-x1)/2)/sin(30))/2;
    k = sin(30) + d;
    xX = Math.round((x2-x1)/2 + k);
    yY = Math.round(((x2-x1)/2)/sin(30));
}

function draw(){
    // frameRate(5);
    noFill();
    stroke(255);
    strokeWeight(1/100);
    translate(0, 0);
    angleMode(DEGREES);
    rotate(0);
    // [ (x2, y2), (x1,y1), (x3, y3) ] -> clockwise rotation for points
    triangle(x2, y2, x1, y1, x3, y3);

    counter ++; console.log(counter);
    console.log(xX, yY);

    if(counter < 11){
        stroke(255);
        strokeWeight(1);
        translate(0,0);
        line(x3, y3, random(0,150), windowHeight);
    }

    if(counter < 11){
        stroke(255);
        strokeWeight(1);
        translate(0,0);
        line(x1, y1, random(300,450), windowHeight);
    }

    if(counter < 11){
        stroke(255);
        strokeWeight(1);
        translate(0,0);
        line(x2, y2, random(600,650), windowHeight);
    }

    if(counter < 11){
        stroke(255);
        strokeWeight(1);
        translate(0,0);
        line(xX, xX, random(800,900), windowHeight);
    }
}

function keyPressed(){
    if(value === 0){
        clear();
        counter = 0;
        background(0);
    }
}
