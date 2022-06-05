function updateBezierPanel(){
    let leftGap = localStorage.getItem("leftGap");
    document.getElementById("leftGap").value = leftGap;

    let rightGap = localStorage.getItem("rightGap");
    document.getElementById("rightGap").value = rightGap;

    let firstPointGap = localStorage.getItem("firstPointGap");
    document.getElementById("firstPointGap").value = firstPointGap;

    let secondPointGap = localStorage.getItem("secondPointGap");
    document.getElementById("secondPointGap").value = secondPointGap;

    let firstBend = localStorage.getItem("firstBend");
    document.getElementById("firstBend").value = firstBend;

    let secondBend = localStorage.getItem("secondBend");
    document.getElementById("secondBend").value = secondBend;

    let disturbedLeftGap = localStorage.getItem("disturbedLeftGap");
    document.getElementById("disturbedLeftGap").value = disturbedLeftGap;

    let disturbedRightGap = localStorage.getItem("disturbedRightGap");
    document.getElementById("disturbedRightGap").value = disturbedRightGap;

    let disturbedFirstPointGap = localStorage.getItem("disturbedFirstPointGap");
    document.getElementById("disturbedFirstPointGap").value = disturbedFirstPointGap;

    let disturbedSecondPointGap = localStorage.getItem("disturbedSecondPointGap");
    document.getElementById("disturbedSecondPointGap").value = disturbedSecondPointGap;

    let disturbedFirstBend = localStorage.getItem("disturbedFirstBend");
    document.getElementById("disturbedFirstBend").value = disturbedFirstBend;

    let disturbedSecondBend = localStorage.getItem("disturbedSecondBend");
    document.getElementById("disturbedSecondBend").value = disturbedSecondBend;

    let bezierWeight = localStorage.getItem("bezierWeight");
    document.getElementById("bezierWeight").value = bezierWeight;

    let disturbedBezierWeight = localStorage.getItem("disturbedBezierWeight");
    document.getElementById("disturbedBezierWeight").value = disturbedBezierWeight;
}


function updateBezierPanelStorage(){
    let leftGap = document.getElementById("leftGap").value;
    localStorage.setItem("leftGap", leftGap);

    let rightGap = document.getElementById("rightGap").value;
    localStorage.setItem("rightGap", rightGap);

    let firstPointGap = document.getElementById("firstPointGap").value;
    localStorage.setItem("firstPointGap", firstPointGap);

    let secondPointGap = document.getElementById("secondPointGap").value;
    localStorage.setItem("secondPointGap", secondPointGap);

    let firstBend = document.getElementById("firstBend").value;
    localStorage.setItem("firstBend", firstBend);
    
    let secondBend = document.getElementById("secondBend").value;
    localStorage.setItem("secondBend", secondBend);

    let disturbedLeftGap = document.getElementById("disturbedLeftGap").value;
    localStorage.setItem("disturbedLeftGap", disturbedLeftGap);

    let disturbedRightGap = document.getElementById("disturbedRightGap").value;
    localStorage.setItem("disturbedRightGap", disturbedRightGap);

    let disturbedFirstPointGap = document.getElementById("disturbedFirstPointGap").value;
    localStorage.setItem("disturbedFirstPointGap", disturbedFirstPointGap);

    let disturbedSecondPointGap = document.getElementById("disturbedSecondPointGap").value;
    localStorage.setItem("disturbedSecondPointGap", disturbedSecondPointGap);

    let disturbedFirstBend = document.getElementById("disturbedFirstBend").value;
    localStorage.setItem("disturbedFirstBend", disturbedFirstBend);
    
    let disturbedSecondBend = document.getElementById("disturbedSecondBend").value;
    localStorage.setItem("disturbedSecondBend", disturbedSecondBend);

    let bezierWeight = document.getElementById("bezierWeight").value;
    localStorage.setItem("bezierWeight", bezierWeight);

    let disturbedBezierWeight = document.getElementById("disturbedBezierWeight").value;
    localStorage.setItem("disturbedBezierWeight", disturbedBezierWeight);
}