var heading = document.querySelector(".title");
var imageOne = document.querySelector(".img1");
var imageTwo = document.querySelector(".img2");
var button = document.querySelector(".btn");

var pictures = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

function chooseWinner(e) {
    e.preventDefault();

    var randomNumber1 = Math.floor(Math.random() * 6);
    imageOne.src = pictures[randomNumber1]

    var randomNumber2 = Math.floor(Math.random() * 6);
    imageTwo.src = pictures[randomNumber2]

    if (imageOne.src < imageTwo.src) {
        heading.innerHTML = "Player 2 wins!"
    }
    if (imageOne.src > imageTwo.src) {
        heading.innerHTML = "Player 1 wins!"
    } else if (imageOne.src == imageTwo.src) {
        heading.innerHTML = "Draw!"
    }
}

button.addEventListener('click', chooseWinner);