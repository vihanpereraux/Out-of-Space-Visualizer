function setup(){
    noCanvas();
}

function draw(){

}

function keyPressed(){
    // w for home
    if (keyCode === 87) {
        location.href = "https://vihanpereraux.github.io/Out-of-Space-Visualizer/";   
    }
    //  a for viz one
    if (keyCode === 65){
        location.href = "https://vihanpereraux.github.io/Out-of-Space-Visualizer/visualizer_one.html";
    }
    //  d for viz two
    if (keyCode === 68){
        location.href = "https://vihanpereraux.github.io/Out-of-Space-Visualizer/visualizer_two.html";
    }
    //  s for viz one
    if (keyCode === 83){
        location.href = "https://vihanpereraux.github.io/Out-of-Space-Visualizer/help.html";
    }
}