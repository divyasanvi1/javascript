var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomnum2=Math.floor(Math.random()*6)+1;

var randomimage2= "dice" +randomnum2 +".png";
var randomImageSource2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomnum2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins!!"
}
else if(randomNumber1<randomnum2)
{
    document.querySelector("h1").innerHTML="🚩Player 2 wins!!"
}
else if(randomNumber1===randomnum2)
{
    document.querySelector("h1").innerHTML="🚩 Draw!!"
}