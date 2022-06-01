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

    createTraiangle();

    // logs
    counter ++; 
    // console.log(counter);
    // console.log(xX, yY);
    // console.log(amp.getLevel());
    
    createFrontLines();

    createCircles();

    if(counter < numOfStrings){
        let attachmentSetOneCheck = document.getElementById("attachmentSetOneCheck");
        if(attachmentSetOneCheck.checked == true ){
            createAttachments();
            let setOneCoordinatesStart = int(localStorage.getItem("setOneCoordinatesStart"));
            let setOneCoordinatesEnd = int(localStorage.getItem("setOneCoordinatesEnd"));
            line(x3, y3, random(setOneCoordinatesEnd, setOneCoordinatesStart), random(windowHeight, windowHeight-300));
        }

        let attachmentSetTwoCheck = document.getElementById("attachmentSetTwoCheck");
        if(attachmentSetTwoCheck.checked == true ){
        createAttachments();
            let setTwoCoordinatesStart = int(localStorage.getItem("setTwoCoordinatesStart"));
            let setTwoCoordinatesEnd = int(localStorage.getItem("setTwoCoordinatesEnd"));
            line(x1, y1, random(setTwoCoordinatesStart, setTwoCoordinatesEnd), windowHeight);
        }

        let attachmentSetThreeCheck = document.getElementById("attachmentSetThreeCheck");
        if(attachmentSetThreeCheck.checked == true ){
            createAttachments();
            let setThreeCoordinatesStart = int(localStorage.getItem("setThreeCoordinatesStart"));
            let setThreeCoordinatesEnd = int(localStorage.getItem("setThreeCoordinatesEnd"));
            line(x2, y2, random(setThreeCoordinatesStart, setThreeCoordinatesEnd), windowHeight);
        }

        let attachmentSetFourCheck = document.getElementById("attachmentSetFourCheck");
        if(attachmentSetFourCheck.checked == true ){
            createAttachments();
            let setFourCoordinatesStart = int(localStorage.getItem("setFourCoordinatesStart"));
            let setFourCoordinatesEnd = int(localStorage.getItem("setFourCoordinatesEnd"));
            line(xX, yY, random(setFourCoordinatesStart, setFourCoordinatesEnd), random(windowHeight-300, windowHeight-250));
        }
    }
}


function createTraiangle(){
    let traiangleSkeltonCheck = document.getElementById("traiangleSkeltonCheck");
    let innerLinesCheck = document.getElementById("innerLinesCheck");
    let outerLineCheck = document.getElementById("outerLineCheck");

    if (traiangleSkeltonCheck.checked == true){
        // [ (x2, y2), (x1,y1), (x3, y3) ] -> clockwise rotation for points
        if(amp.getLevel() > waveLimit){
            noFill();
            let highFQStroke = color(localStorage.getItem("triangleHighFrequencyColor"));
            stroke(highFQStroke);
            let traiangleSkeltonWeight = localStorage.getItem("traiangleSkeltonWeight");
            strokeWeight(traiangleSkeltonWeight);
            triangle(x2, y2, x1, y1, x3, y3);
        }
        else{
            noFill();
            let lowFQStroke = color(localStorage.getItem("triangleLowFrequencyColor"));
            stroke(lowFQStroke);
            let traiangleSkeltonWeight = localStorage.getItem("traiangleSkeltonWeight");
            strokeWeight(traiangleSkeltonWeight);
            triangle(x2, y2, x1, y1, x3, y3);
        }
        translate(0, 0);
        angleMode(DEGREES);
        
        if(innerLinesCheck.checked == true){
            let innerLinesWeight = localStorage.getItem("innerLinesWeight");
            strokeWeight(innerLinesWeight);
            line(x1, y1, (x2-x1)*0.75+x1, y3/2);
            line(x2, y2, (x2-x1)*0.25+x1, y3/2);
        }

        if(outerLineCheck.checked == true){
            let outerLineWeight = localStorage.getItem("outerLineWeight");
            strokeWeight(outerLineWeight);
            line((x2-x1)/2+x1, 0, (x2-x1)/2+x1, windowHeight);
        }
    }
}


function createCircles(){
    let circlesGroupCheck = document.getElementById("circlesGroupCheck");

    if(circlesGroupCheck.checked == true){
        if(amp.getLevel() > waveLimit){
            let circleBorderWeight = localStorage.getItem("circleBorderWeight");
            strokeWeight(circleBorderWeight);
            stroke(0);
            let circlesRadius = localStorage.getItem("circlesRadius");
            circle(x3, y3, amp.getLevel()*circlesRadius);
        }
        else{
            let circleBorderWeight = localStorage.getItem("circleBorderWeight");
            strokeWeight( (circleBorderWeight/10)*4 );
            stroke(255);
            circle(x3, y3, amp.getLevel()*700);
        }
    }
}


function createAttachments(){
    if(counter < numOfStrings){
        if(amp.getLevel() > waveLimit){
            stroke(random(150, 255), 0, 0);
        }
        else{
            stroke(255);
        }
        strokeWeight(1);
        translate(0,0);
    }
}


function createFrontLines(){
    let frontLinesCheck = document.getElementById("frontLinesCheck");
    
    if(frontLinesCheck.checked == true){
        for (let i = 1; i < windowWidth; i++) {
            let frontLinesWeight = localStorage.getItem("frontLinesWeight");
            strokeWeight(frontLinesWeight);
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
}


function resetCanvas(){
    if(value === 0){
        clear();
        createCanvas(windowWidth, windowHeight);
        if(amp.getLevel() > waveLimit){
            background(255);
        }
        else{
            let bgColor = color(localStorage.getItem("BgColor"));
            background(bgColor);
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
    resetCanvas();
}, 260);
