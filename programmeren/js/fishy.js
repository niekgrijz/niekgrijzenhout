/*jslint browser:true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars:true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//variable voor het aantal seconden waar de timer op moet staan//
var timer = 10;
var sec = 0;

//array voor achtergrondplaatjes//
var imagesArray = ["images/4.png", "images/5.png", "images/6.png"];

//functie die wordt aangeroepen als er op de button in de html wordt geklikt voor het achtergrondplaatje, bron: https://stackoverflow.com/questions/19693256/javascript-display-random-images door gebruiker lunayyko

function displayImage() {
    var num = Math.floor(Math.random() * 3);
    var img = document.getElementById("background");
    img.src = imagesArray[num];
}

//als er geklikt wordt op de vis verschijnt het voeder plaatje en gaat de timer 1 seconde omhoog
var img = document.getElementById("fish");
img.addEventListener("click", function () {
    if (img.src != "images/1.png") {
        img.src = "images/2.png";
        timer++;
    }
});

//functie voor het aanmaken van de timer, bron: https://www.youtube.com/watch?v=pkUUAtMzJ1A door Dharmesh Mourya//
function startTimer() {
    sec = Number(timer % 60);

    //als timer onder 1 zit wordt het dode plaatje gestuurd//
    if (timer < 1) {
        img.src = "images/3.png";
    }
    
    //als de timer 0 bereikt wordt er een alert getoond//
    if (timer < 0) {

        document.getElementById("gameover").innerHTML = "<p>Game Over</p>";
        window.alert("Game Over, refresh om opnieuw te proberen");
    }
//als de timer groter is dan 1 wordt het levende visje getoond dan verdwijnt het plaatje van het gevoederde visje//
    if (timer > 1) {
        img.src = "images/1.png";
    }
//dom wordt aangepast, hierdoor wordt de tijd die over is getoond op het scherm//
    document.getElementById("tijd").innerHTML = "<b>Health: </b>" + sec.toString();
    timer--;
    setTimeout(function () {
        startTimer();
    }, 1000);

}

//wat er wordt ingevoerd in het tekstveld wordt toegevoegd aan de html, hierdoor komt de naam van het visje in de tekst te staan//

function verwerkFormulier(event) {
    console.log(document.querySelector('input').value);
    event.preventDefault();
    document.querySelector('p').textContent = "druk op " + document.querySelector('input').value + " om hem te voederen";
    startTimer();
}

document.querySelector('form').addEventListener('submit', verwerkFormulier);



