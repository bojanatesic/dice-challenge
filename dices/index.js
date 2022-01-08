
var heading = document.querySelector(".title");
var imageOne = document.querySelector(".img1");
var imageTwo = document.querySelector(".img2");

var pictures = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

var randomNumber1 = Math.floor(Math.random()* 5) ;
imageOne.src = pictures[randomNumber1]

var randomNumber2 = Math.floor(Math.random()* 5) ;
imageTwo.src = pictures[randomNumber2]

