var counter = 0;
var value = 0;
var x1, x2, x3, y1, y2, y3;
var xX, yY;
var d;
var k;
var amp;
var r, g, b;
var waveLimit;
var numOfStrings;

function preload(){
    sound = loadSound("Glitch03.mp3");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    // sound.play();
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
    frameRate(120);
    waveLimit = 0.21;
    numOfStrings = 5;

    if(amp.getLevel() > waveLimit){
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
    line(x1, y1, (x2-x1)*0.75+x1, y3/2);
    line(x2, y2, (x2-x1)*0.25+x1, y3/2);
    line((x2-x1)/2+x1, 0, (x2-x1)/2+x1, windowHeight)
    // triangle((x2-x1)/2+x1, 0, (x2-x1)*0.75+x1, y3/2, (x2-x1)/4+x1, y3/2);

    counter ++; 
    console.log(counter);
    console.log(xX, yY);
    console.log(amp.getLevel());
    
    if(true){
        for (let i = 1; i < windowWidth; i++) {
            strokeWeight(0.1/2);
            let beamSpace = i*40;
            if(beamSpace < windowWidth){
                if(amp.getLevel() < waveLimit){
                    stroke(255);
                    line(beamSpace, 0, beamSpace, windowHeight);
                }
                else{
                    stroke(255, 0, 0);
                    line(beamSpace, 0, beamSpace, windowHeight);
                }
            }
        }
    }
    if(amp.getLevel() > waveLimit){
        strokeWeight(1);
        stroke(0);
        circle(x3, y3, amp.getLevel()*500);
    }
    else{
        strokeWeight(0.4);
        stroke(255);
        circle(x3, y3, amp.getLevel()*700);
    }

    if(counter < numOfStrings){
        if(amp.getLevel() > waveLimit){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(x3, y3, random(-120), random(windowHeight, windowHeight-300));
    }

    if(counter < numOfStrings){
        if(amp.getLevel() > waveLimit){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(x1, y1, random(300,450), windowHeight);
    }

    if(counter < numOfStrings){
        if(amp.getLevel() > waveLimit){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(x2, y2, random(windowWidth-300,windowWidth-100), windowHeight);
    }

    if(counter < numOfStrings){
        if(amp.getLevel() > waveLimit){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
        line(xX, yY, random(windowWidth, windowWidth*2), random(windowHeight-300, windowHeight-250));
    }
}

function resetCanvas(){
    if(value === 0){
        clear();
        createCanvas(windowWidth, windowHeight);
        if(amp.getLevel() > waveLimit){
            background(255);
        }
        else{
            background(0);
        }
        angleMode(DEGREES);
        counter = 0;

        x1 = random(0,windowWidth*.75); y1 = random(0);
        x2 = random(100, 250)+x1; y2 = random(0);
        x3 = ((x2-x1)/2)+x1; y3 = ((x2-x1)/2)*tan(60); // ((x2-x1)/2)+x1 -- ((x2-x1)/2)*tan(60) 

        d = (((x2-x1)/2)/sin(30))/2;
        k = sin(30) + d;
        xX = ((x2-x1)*0.75) + x1;  // Math.round((x2-x1)/2 + k);
        yY = (y3/2);   // Math.round(((x2-x1)/2)/sin(30));
    }
}

function keyPressed(){
    sound.play();
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
    resetCanvas();
}, 260);


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