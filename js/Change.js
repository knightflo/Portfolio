


function games(){
document.getElementById("image1").style.backgroundImage = 'url("img/point and click.png")';
document.getElementById("image2").style.backgroundImage = 'url("img/pong.png")';
document.getElementById("image3").style.backgroundImage = 'url("img/troll.png")';
document.getElementById("image4").style.backgroundImage = 'url("img/Troll (2).png")';
document.getElementById("image5").style.backgroundImage = 'url("img/snail.png")';

document.getElementById("title1").innerText = "Point and click game";
document.getElementById("title2").innerText = "Pong";
document.getElementById("title3").innerText = "Troll game for mobile";
document.getElementById("title4").innerText = "Trolly adventures";
document.getElementById("title5").innerText = "The snail foundation";

document.getElementById("tags1").innerHTML = "<p>HTML</p>\n"+"<p>CSS</p>\n"+"<p>Javascript</p>";
document.getElementById("tags2").innerHTML = "<p>C#</p>\n" +
    "                        <p>Unity</p>";
document.getElementById("tags3").innerHTML = "<p>C#</p>\n" +
    "                        <p>Unity</p>";
document.getElementById("tags4").innerHTML = "<p>Stencyl</p>";
document.getElementById("tags5").innerHTML = "<p>C#</p>"+ "<p>Unity</p>";

document.getElementById("description1").innerText = "A game, created in a website, where you have to point and click to move";
document.getElementById("description2").innerText = "The well known table tennis game on screen";
document.getElementById("description3").innerText = "A mobile platformer game with hidden traps";
document.getElementById("description4").innerText = "My first platformer game with hidden traps";
document.getElementById("description5").innerText = "Catch as many snails as possible";

document.getElementById("link1").href ="Point%20and%20click.html";
document.getElementById("link2").href ="pong.html";
document.getElementById("link3").href ="Troll.html";
document.getElementById("link4").href ="adventure.html";
document.getElementById("link5").href ="snail.html";

    document.getElementById("invi4").style.display = "flex";
    document.getElementById("invi5").style.display = "flex";
}

function website(){
    document.getElementById("image1").style.backgroundImage = 'url("img/Ameland.png")';
    document.getElementById("image2").style.backgroundImage = 'url("img/webshop.png")';
    document.getElementById("image3").style.backgroundImage = 'url("img/portfolio.png")';
    document.getElementById("image4").style.backgroundImage = '';

    document.getElementById("title1").innerText = "Ameland";
    document.getElementById("title2").innerText = "Webshop";
    document.getElementById("title3").innerText = "My first portfolio website";
    document.getElementById("title4").innerText = "";

    document.getElementById("tags1").innerHTML = "<p>HTML</p>\n"+"<p>CSS</p>";
    document.getElementById("tags2").innerHTML = "<p>HTML</p>\n" +
        "                        <p>CSS</p>"+"<p>Javascript</p>";
    document.getElementById("tags3").innerHTML = "<p>Jimdo</p>";
    document.getElementById("tags4").innerHTML = "";

    document.getElementById("description1").innerText = "A website I made about my favourite island";
    document.getElementById("description2").innerText = "An exercise in creating a webshop";
    document.getElementById("description3").innerText = "This is my first portfolio website that I used to introduce myself to Sint Lucas";
    document.getElementById("description4").innerText = "";

    document.getElementById("link1").href ="Ameland.html";
    document.getElementById("link2").href ="webshop.html";
    document.getElementById("link3").href ="portfolio.html";
    document.getElementById("link4").href ="";
    document.getElementById("link5").href ="";

    document.getElementById("invi4").style.display = "none";
    document.getElementById("invi5").style.display = "none";
}

function other(){
    document.getElementById("image1").style.backgroundImage = 'url("img/Judaism.png")';
    document.getElementById("image2").style.backgroundImage = 'url("img/vijfluik.png")';
    document.getElementById("image3").style.backgroundImage = 'url("img/creativity.png")';
    document.getElementById("image4").style.backgroundImage = '';

    document.getElementById("title1").innerText = "Poster of Judaism";
    document.getElementById("title2").innerText = "5 luik";
    document.getElementById("title3").innerText = "Professional creativity";
    document.getElementById("title4").innerText = "";

    document.getElementById("tags1").innerHTML = "<p>Photoshop</p>";
    document.getElementById("tags2").innerHTML = "<p>C#</p>" +
        "                        <p>Unity</p>";
    document.getElementById("tags3").innerHTML = "<p>Adobe premiere pro</p>";
    document.getElementById("tags4").innerHTML = "";

    document.getElementById("link1").href ="Judaism.html";
    document.getElementById("link2").href ="5_luik.html";
    document.getElementById("link3").href ="Creativity.html";
    document.getElementById("link4").href ="";
    document.getElementById("link5").href ="";

    document.getElementById("description1").innerText = "A poster made for Citizenship class";
    document.getElementById("description2").innerText = "A game about 5 characteristics";
    document.getElementById("description3").innerText = "A video about what it means to become a professional creator";
    document.getElementById("description4").innerText = "";

    document.getElementById("invi4").style.display = "none";
    document.getElementById("invi5").style.display = "none";
}