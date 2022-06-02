function updateColorsPanel(){
    let bgLowFrequencyColor = localStorage.getItem("bgLowFrequencyColor");
    document.getElementById("bgLowFrequencyColor").value = bgLowFrequencyColor;
    let bgHighFrequencyColor = localStorage.getItem("bgHighFrequencyColor");
    document.getElementById("bgHighFrequencyColor").value = bgHighFrequencyColor;

    let triangleLowFrequencyColor = localStorage.getItem("triangleLowFrequencyColor");
    document.getElementById("triangleLowFrequencyColor").value = triangleLowFrequencyColor;
    let triangleHighFrequencyColor = localStorage.getItem("triangleHighFrequencyColor");
    document.getElementById("triangleHighFrequencyColor").value = triangleHighFrequencyColor;

    let circlesLowFrequencyColor = localStorage.getItem("circlesLowFrequencyColor");
    document.getElementById("circlesLowFrequencyColor").value = circlesLowFrequencyColor;
    let circlesHighFrequencyColor = localStorage.getItem("circlesHighFrequencyColor");
    document.getElementById("circlesHighFrequencyColor").value = circlesHighFrequencyColor;

    let innerLinesLowFrequencyColor = localStorage.getItem("innerLinesLowFrequencyColor");
    document.getElementById("innerLinesLowFrequencyColor").value = innerLinesLowFrequencyColor;
    let innerLinesHighFrequencyColor = localStorage.getItem("innerLinesHighFrequencyColor");
    document.getElementById("innerLinesHighFrequencyColor").value = innerLinesHighFrequencyColor;

    let outerLineLowFrequencyColor = localStorage.getItem("outerLineLowFrequencyColor");
    document.getElementById("outerLineLowFrequencyColor").value = outerLineLowFrequencyColor;
    let outerLinesHighFrequencyColor = localStorage.getItem("outerLinesHighFrequencyColor");
    document.getElementById("outerLinesHighFrequencyColor").value = outerLinesHighFrequencyColor;

    let attachmentsLowFrequencyColor = localStorage.getItem("attachmentsLowFrequencyColor");
    document.getElementById("attachmentsLowFrequencyColor").value = attachmentsLowFrequencyColor;
    let attachmentsHighFrequencyColor = localStorage.getItem("attachmentsHighFrequencyColor");
    document.getElementById("attachmentsHighFrequencyColor").value = attachmentsHighFrequencyColor;

    let frontLinesLowFrequencyColor = localStorage.getItem("frontLinesLowFrequencyColor");
    document.getElementById("frontLinesLowFrequencyColor").value = frontLinesLowFrequencyColor;
    let frontLinesHighFrequencyColor = localStorage.getItem("frontLinesHighFrequencyColor");
    document.getElementById("frontLinesHighFrequencyColor").value = frontLinesHighFrequencyColor;
}

function updateColorsStorage(){
    let bgLowFrequencyColor = document.getElementById("bgLowFrequencyColor").value;  
    localStorage.setItem("bgLowFrequencyColor", bgLowFrequencyColor);
    let bgHighFrequencyColor = document.getElementById("bgHighFrequencyColor").value;  
    localStorage.setItem("bgHighFrequencyColor", bgHighFrequencyColor);
    
    let triangleLowFrequencyColor = document.getElementById("triangleLowFrequencyColor").value;  
    localStorage.setItem("triangleLowFrequencyColor", triangleLowFrequencyColor);
    let triangleHighFrequencyColor = document.getElementById("triangleHighFrequencyColor").value;  
    localStorage.setItem("triangleHighFrequencyColor", triangleHighFrequencyColor);

    let circlesLowFrequencyColor = document.getElementById("circlesLowFrequencyColor").value;  
    localStorage.setItem("circlesLowFrequencyColor", circlesLowFrequencyColor);
    let circlesHighFrequencyColor = document.getElementById("circlesHighFrequencyColor").value;  
    localStorage.setItem("circlesHighFrequencyColor", circlesHighFrequencyColor);

    let innerLinesLowFrequencyColor = document.getElementById("innerLinesLowFrequencyColor").value;  
    localStorage.setItem("innerLinesLowFrequencyColor", innerLinesLowFrequencyColor);
    let innerLinesHighFrequencyColor = document.getElementById("innerLinesHighFrequencyColor").value;  
    localStorage.setItem("innerLinesHighFrequencyColor", innerLinesHighFrequencyColor);

    let outerLineLowFrequencyColor = document.getElementById("outerLineLowFrequencyColor").value;  
    localStorage.setItem("outerLineLowFrequencyColor", outerLineLowFrequencyColor);
    let outerLinesHighFrequencyColor = document.getElementById("outerLinesHighFrequencyColor").value;  
    localStorage.setItem("outerLinesHighFrequencyColor", outerLinesHighFrequencyColor);

    let attachmentsLowFrequencyColor = document.getElementById("attachmentsLowFrequencyColor").value;  
    localStorage.setItem("attachmentsLowFrequencyColor", attachmentsLowFrequencyColor);
    let attachmentsHighFrequencyColor = document.getElementById("attachmentsHighFrequencyColor").value;  
    localStorage.setItem("attachmentsHighFrequencyColor", attachmentsHighFrequencyColor);

    let frontLinesLowFrequencyColor = document.getElementById("frontLinesLowFrequencyColor").value;  
    localStorage.setItem("frontLinesLowFrequencyColor", frontLinesLowFrequencyColor);
    let frontLinesHighFrequencyColor = document.getElementById("frontLinesHighFrequencyColor").value;  
    localStorage.setItem("frontLinesHighFrequencyColor", frontLinesHighFrequencyColor);
}