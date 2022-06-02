function updateColorsPanel(){
    let bgLowFrequencyColor = localStorage.getItem("bgLowFrequencyColor");
    document.getElementById("bgLowFrequencyColor").value = bgLowFrequencyColor;
    let bgHighFrequencyColor = localStorage.getItem("bgHighFrequencyColor");
    document.getElementById("bgHighFrequencyColor").value = bgHighFrequencyColor;

    let beziarLowFrequencyColor = localStorage.getItem("beziarLowFrequencyColor");
    document.getElementById("beziarLowFrequencyColor").value = beziarLowFrequencyColor;
    let beziarHighFrequencyColor = localStorage.getItem("beziarHighFrequencyColor");
    document.getElementById("beziarHighFrequencyColor").value = beziarHighFrequencyColor;
}

function updateColorsStorage(){
    let bgLowFrequencyColor = document.getElementById("bgLowFrequencyColor").value;  
    localStorage.setItem("bgLowFrequencyColor", bgLowFrequencyColor);
    let bgHighFrequencyColor = document.getElementById("bgHighFrequencyColor").value;  
    localStorage.setItem("bgHighFrequencyColor", bgHighFrequencyColor);
    
    let beziarLowFrequencyColor = document.getElementById("beziarLowFrequencyColor").value;  
    localStorage.setItem("beziarLowFrequencyColor", beziarLowFrequencyColor);
    let beziarHighFrequencyColor = document.getElementById("beziarHighFrequencyColor").value;  
    localStorage.setItem("beziarHighFrequencyColor", beziarHighFrequencyColor);

}