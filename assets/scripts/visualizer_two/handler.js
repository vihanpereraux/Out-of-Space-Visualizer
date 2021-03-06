window.onload = function(){
    localStorage.clear();
    setDefaultValues();
    updateControllers();
}

function updateControllers(){
    updateBezierPanel();
    updateBezierColorsPanel();
}

function updateStorage(){
    updateBezierPanelStorage();
    updateBezierColorsStorage();
}   

window.setInterval(function() {
    updateStorage();
}, 100);

function setDefaultValues(){
    // varaibles panel properties
    localStorage.setItem("leftGap", 25);
    localStorage.setItem("rightGap", 25);
    localStorage.setItem("firstPointGap", 25);
    localStorage.setItem("secondPointGap", 25);
    localStorage.setItem("firstBend", 700);
    localStorage.setItem("secondBend", 600);
    localStorage.setItem("bezierWeight", 1);

    // varaibles panel properties - disturbed mind
    localStorage.setItem("disturbedLeftGap", 25);
    localStorage.setItem("disturbedRightGap", 25);
    localStorage.setItem("disturbedFirstPointGap", 25);
    localStorage.setItem("disturbedSecondPointGap", 25);
    localStorage.setItem("disturbedFirstBend", 700);
    localStorage.setItem("disturbedSecondBend", 600);
    localStorage.setItem("disturbedBezierWeight", 1);
    localStorage.setItem("bezierType", "option two");
    localStorage.setItem("bezierAmountCheck", "option one");

    // colors panel properties
    localStorage.setItem("bgLowFrequencyColor", '#000000');
    localStorage.setItem("bgHighFrequencyColor", '#000000');

    localStorage.setItem("beziarLowFrequencyColor", '#ffffff');
    localStorage.setItem("beziarHighFrequencyColor", '#FF0000');
}