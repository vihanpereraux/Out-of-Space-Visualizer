function updateVariablesPanel(){
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
}


function updateVariablesStorage(){
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
}