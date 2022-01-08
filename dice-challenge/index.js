//elements
let heading = document.querySelector(".title");
let imageOne = document.querySelector(".img1");
let imageTwo = document.querySelector(".img2");

//functions

function chooseWinner () {
//na refsresh zelimo da izadju random slike
//ako je broj na prvoj slici veci od broja na drugoj sliki umesto refresh me izadje da je player1 pobedio
//ako je broj na drugoj slici veci izadje umesto refresh me da je player2 pobedio
//ako su slike identicne izadje draw
}
//event listeners
// document.querySelectorAll(".drum")[i].addEventListener("click", function ()
// {
//     var audio = new Audio('/sounds/tom-1.mp3');
//         audio.play();
// });
// }
var pictures = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

let randomNumber1 = Math.floor(Math.random()* 5) ;
imageOne.src = pictures[randomNumber1]

let randomNumber2 = Math.floor(Math.random()* 5) ;
imageTwo.src = pictures[randomNumber2]

