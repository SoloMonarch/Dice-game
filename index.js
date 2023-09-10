
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";

 document.querySelector(".left").setAttribute("src",images1);
 document.querySelector(".right").setAttribute("src",images2);



    if (randomNumber1 === randomNumber2){
        document.querySelector("h4").innerHTML = "Draw";
        document.querySelector(".winner").setAttribute("src","images/cat.jpg");
    }
    else if (randomNumber1 >= randomNumber2){
        document.querySelector("h4").innerHTML = "Coline Win";
        document.querySelector(".winner").setAttribute("src","images/Coline.jpg");
    }
    else if (randomNumber1 <= randomNumber2){
        document.querySelector("h4").innerHTML = "Pradeep Win";
        document.querySelector(".winner").setAttribute("src","images/pradeep.jpg");
    }
