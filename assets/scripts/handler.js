// For displaying values stored in storage
window.onload = function(){
    setDefaultValues();
    updateControllers();
}

function updateControllers(){
    updateVariablesPanel();
    updateColorsPanel();
    setDefaultValues();
}

function updateStorage(){
    updateVariablesStorage();
    updateColorsStorage();
}   


window.setInterval(function() {
    updateStorage();
}, 100);


function setDefaultValues(){
    // varaibles panel properties
    localStorage.setItem("BgColor", '#000000');
    localStorage.setItem("traiangleSkeltonWeight", 1);
    localStorage.setItem("innerLinesWeight", 1);
    localStorage.setItem("circleBorderWeight", 1);
    localStorage.setItem("circlesRadius", 500);
    localStorage.setItem("outerLineWeight", 1);
    localStorage.setItem("frontLinesWeight", 0.1/2);

    localStorage.setItem("setOneCoordinatesStart", -120);
    localStorage.setItem("setOneCoordinatesEnd", 0);

    localStorage.setItem("setTwoCoordinatesStart", 300);
    localStorage.setItem("setTwoCoordinatesEnd", 450);

    localStorage.setItem("setThreeCoordinatesStart", 600);
    localStorage.setItem("setThreeCoordinatesEnd", 800);

    localStorage.setItem("setFourCoordinatesStart", 1300);
    localStorage.setItem("setFourCoordinatesEnd", 2600);


    // colors panel properties
    localStorage.setItem("bgLowFrequencyColor", '#000000');
    localStorage.setItem("bgHighFrequencyColor", '#ffffff');

    localStorage.setItem("triangleLowFrequencyColor", '#ffffff');
    localStorage.setItem("triangleHighFrequencyColor", '#FF0000');

    localStorage.setItem("circlesLowFrequencyColor", '#ffffff');
    localStorage.setItem("circlesHighFrequencyColor", '#FF0000');

    localStorage.setItem("innerLinesLowFrequencyColor", '#ffffff');
    localStorage.setItem("innerLinesHighFrequencyColor", '#FF0000');

    localStorage.setItem("outerLineLowFrequencyColor", '#ffffff');
    localStorage.setItem("outerLinesHighFrequencyColor", '#FF0000');

    localStorage.setItem("attachmentsLowFrequencyColor", '#ffffff');
    localStorage.setItem("attachmentsHighFrequencyColor", '#FF0000');

    localStorage.setItem("frontLinesLowFrequencyColor", '#ffffff');
    localStorage.setItem("frontLinesHighFrequencyColor", '#FF0000');
}
<<<<<<< HEAD
// setDefaultValues();
=======
>>>>>>> 893b3a8ece23fa4832c58a47d9337d26eed5e8a3
