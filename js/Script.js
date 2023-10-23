let click = false;


function choice(){
    if (click === false){
        document.getElementById("language").style.display = "flex"
        click = true;
    }
else {
        click = false;
        document.getElementById("language").style.display = "none"
    }
}