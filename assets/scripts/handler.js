// For displaying values stored in storage
window.onload = function(){
    let traiangleSkeltonWeight = localStorage.getItem("traiangleSkeltonWeight");
    document.getElementById("traiangleSkeltonWeight").value = traiangleSkeltonWeight;

    let innerLinesWeight = localStorage.getItem("innerLinesWeight");
    document.getElementById("innerLinesWeight").value = innerLinesWeight;

    let circleBorderWeight = localStorage.getItem("circleBorderWeight");
    document.getElementById("circleBorderWeight").value = circleBorderWeight;

    let circlesRadius = localStorage.getItem("circlesRadius");
    document.getElementById("circlesRadius").value = circlesRadius;

    let outerLineWeight = localStorage.getItem("outerLineWeight");
    document.getElementById("outerLineWeight").value = outerLineWeight;

    let frontLinesWeight = localStorage.getItem("frontLinesWeight");
    document.getElementById("frontLinesWeight").value = frontLinesWeight;

    let setOneCoordinatesStart = localStorage.getItem("setOneCoordinatesStart");
    document.getElementById("setOneCoordinatesStart").value = setOneCoordinatesStart;
    let setOneCoordinatesEnd = localStorage.getItem("setOneCoordinatesEnd");
    document.getElementById("setOneCoordinatesEnd").value = setOneCoordinatesEnd;

    let setTwoCoordinatesStart = localStorage.getItem("setTwoCoordinatesStart");
    document.getElementById("setTwoCoordinatesStart").value = setTwoCoordinatesStart;
    let setTwoCoordinatesEnd = localStorage.getItem("setTwoCoordinatesEnd");
    document.getElementById("setTwoCoordinatesEnd").value = setTwoCoordinatesEnd;

    let setThreeCoordinatesStart = localStorage.getItem("setThreeCoordinatesStart");
    document.getElementById("setThreeCoordinatesStart").value = setThreeCoordinatesStart;
    let setThreeCoordinatesEnd = localStorage.getItem("setThreeCoordinatesEnd");
    document.getElementById("setThreeCoordinatesEnd").value = setThreeCoordinatesEnd;

    let setFourCoordinatesStart = localStorage.getItem("setFourCoordinatesStart");
    document.getElementById("setFourCoordinatesStart").value = setFourCoordinatesStart;
    let setFourCoordinatesEnd = localStorage.getItem("setFourCoordinatesEnd");
    document.getElementById("setFourCoordinatesEnd").value = setFourCoordinatesEnd;
};


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
