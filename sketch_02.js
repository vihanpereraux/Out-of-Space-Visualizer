var counter = 0;
var value = 0;
var x1, x2, x3, y1, y2, y3;
var xX, yY;
var d;
var k;
var amp;
var r, g, b;

function preload(){
    sound = loadSound("Glitch.mp3");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    sound.play();
    amp = new p5.Amplitude();
    angleMode(DEGREES);
    counter = 0;
    
    // basic cordinates of triangle
    // (x1, y1) = (0,0)
    // (x2, y2) = (6,0)
    // (x3, y3) = (3,6)
    
    x1 = random(0,5); y1 = 0;
    x2 = random(5, 20)+x1; y2 = 0;
    x3 = ((x2-x1)/2)+x1; y3 = ((x2-x1)/2)*tan(60); // ((x2-x1)/2)+x1 -- ((x2-x1)/2)*tan(60) 

    d = (((x2-x1)/2)/sin(30))/2;
    k = sin(30) + d;
    xX = ((x2-x1)*0.75) + x1;  // Math.round((x2-x1)/2 + k);
    yY = (y3/2);   // Math.round(((x2-x1)/2)/sin(30));
}

function draw(){
    frameRate(15);
    if(amp.getLevel() > 0.3){
        noFill();
        stroke(0);
        strokeWeight(1);
    }
    else{
        noFill();
        stroke(255);
        strokeWeight(1);
    }
    // fill(random(0,255), random(0,255), random(0,255));
    translate(0, 0);
    angleMode(DEGREES);
    // [ (x2, y2), (x1,y1), (x3, y3) ] -> clockwise rotation for points
    triangle(x2, y2, x1, y1, x3, y3);

    counter ++; 
    console.log(counter);
    console.log(xX, yY);
    console.log(amp.getLevel());

    if(counter < 15){
        if(amp.getLevel() > 0.3){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(x3, y3, random(0,150), windowHeight);
    }

    if(counter < 15){
        if(amp.getLevel() > 0.3){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(x1, y1, random(300,450), windowHeight);
    }

    if(counter < 15){
        if(amp.getLevel() > 0.3){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(x2, y2, random(600,650), windowHeight);
    }

    if(counter < 15){
        if(amp.getLevel() > 0.3){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(xX, yY, random(800,900), windowHeight);
    }
}

function hhh(){
    if(value === 0){
        clear();
        createCanvas(windowWidth, windowHeight);
        if(amp.getLevel() > 0.3){
            background(255);
        }
        else{
            background(0);
        }
        angleMode(DEGREES);
        counter = 0;

        x1 = random(0,windowWidth*.75); y1 = random(0);
        x2 = random(100, 300)+x1; y2 = random(0);
        x3 = ((x2-x1)/2)+x1; y3 = ((x2-x1)/2)*tan(60); // ((x2-x1)/2)+x1 -- ((x2-x1)/2)*tan(60) 

        d = (((x2-x1)/2)/sin(30))/2;
        k = sin(30) + d;
        xX = ((x2-x1)*0.75) + x1;  // Math.round((x2-x1)/2 + k);
        yY = (y3/2);   // Math.round(((x2-x1)/2)/sin(30));
    }
}


window.setInterval(function() {
    if(amp.getLevel() > 0.35){
        r = 255;
        g = 0;
        b = 0;
    }
    else{
        r = 0, g = 0, b = 0;
    }
    hhh();
}, 450);


// function setup(){
//     createCanvas(500, 500);
//     background(255, 0, 0);
// }

// function draw(){
//     noFill();
//     stroke(0);
//     strokeWeight(2);
//     translate(10,10)
//     bezier(0, 0, 180, 100, 250, 200, 500, 500);
// }