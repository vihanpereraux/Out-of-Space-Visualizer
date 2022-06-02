window.onload = function(){
    localStorage.clear();
    setDefaultValues();
    updateControllers();
}

function updateControllers(){
    updateVariablesPanel();
    updateColorsPanel();
}

function setDefaultValues(){
    // varaibles panel properties
    localStorage.setItem("leftGap", '#000000');
    localStorage.setItem("rightGap", 1);
    localStorage.setItem("firstPointGap", 1);
    localStorage.setItem("firstPointGap", 1);
    localStorage.setItem("firstBend", 500);
    localStorage.setItem("secondBend", 1);

    // colors panel properties
    localStorage.setItem("bgLowFrequencyColor", '#000000');
    localStorage.setItem("bgHighFrequencyColor", '#ffffff');

    localStorage.setItem("beziarLowFrequencyColor", '#ffffff');
    localStorage.setItem("beziarHighFrequencyColor", '#FF0000');
}