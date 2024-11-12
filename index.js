let redbtn = document.getElementById("red");
let bluebtn = document.getElementById("blue");
let blackbtn = document.getElementById("black");
let bike = document.getElementById("bikes");

redbtn.onclick = function(){
    bike.style.backgroundImage = "url(img/BMW1.png)";
}

bluebtn.onclick = function(){
    bike.style.backgroundImage = "url(img/BMW2.png)";
}

blackbtn.onclick = function(){
    bike.style.backgroundImage = "url(img/BMW3.png)";
}