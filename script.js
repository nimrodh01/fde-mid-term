var currentPos = 0;

var images = ["Images/paz_250x110103131473.jpg",
"Images/250X110571325734.jpg",
 "Images/250X110668568400.jpg"];


function volgendefoto() {

    var image = document.getElementById("var-image");
    ++currentPos
    image.src = images[currentPos % 3];

    //alert(currentPos);
}

setInterval(volgendefoto, 5000);
