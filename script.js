document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton1").addEventListener("click", envejecer);
});


document.getElementById("boton2").addEventListener("click", startOver);

var contador = 0;

boton1.onclick = function(){
    contador++;
};


function envejecer() {
    if (contador === 1) {
    var age = document.getElementById("age");
    var man = document.getElementById("boy");
    var hair = document.getElementById("hair");
    var nose = document.getElementById("nose");
    var mouth = document.getElementById("mouth");
    man.style.backgroundColor = "rgb(236, 191, 198)";
    man.style.height = "210px";
    nose.style.backgroundColor="rgb(236, 191, 198)"
    hair.style.borderRadius = "70% 70% 20% 20%";
    age.innerHTML="20 y/o";
    }
    else if (contador === 2){
    var age = document.getElementById("age");
    var man = document.getElementById("boy");
    var hair = document.getElementById("hair");
    var nose = document.getElementById("nose");
    var mouth = document.getElementById("mouth");
    hair.style.borderRadius = "70% 0% 70% 0%";
    man.style.height = "230px";
    mouth.style.borderRadius = "0% 0% 30% 30%";
    age.innerHTML="40 y/o"
    }
    else if (contador=== 3) {
    var age = document.getElementById("age");
    var man = document.getElementById("boy");
    var hair = document.getElementById("hair");
    var nose = document.getElementById("nose");
    var mouth = document.getElementById("mouth");
    man.style.backgroundColor = "rgb(249, 214, 219)";
    nose.style.backgroundColor = "rgb(249, 214, 219)";
    mouth.style.backgroundColor = "salmon";
    mouth.style.border="1px solid salmon";
    mouth.style.borderRadius = "100% 100% 0% 0%";
    hair.style.backgroundColor = "rgb(117, 103, 89)";
    hair.style.width = "85%";
    hair.style.height = "41px";
    hair.style.borderRadius = "40% 0% 70% 40%";
    hair.style.left = "20px";
    age.innerHTML="80 y/o";
    }
    else {
    var age = document.getElementById("age");
    var man = document.getElementById("boy");
    var hair = document.getElementById("hair");
    var nose = document.getElementById("nose");
    var mouth = document.getElementById("mouth");
    var eye1 = document.getElementById("eye1");
    var eye2 = document.getElementById("eye2");
    var cachete1 = document.getElementById("cachete1");
    var cachete2 = document.getElementById("cachete2");
    var boton1 = document.getElementById("boton1");
    var boton2 = document.getElementById("boton2");
    man.style.backgroundColor = "rgb(209, 209, 209)";
    nose.style.backgroundColor = "black";
    hair.style.display = "none";
    eye1.style.backgroundColor = "black";
    eye2.style.backgroundColor = "black";
    eye1.style.borderRadius = "30px 30px 20px 20px";
    eye2.style.borderRadius = "30px 30px 20px 20px";
    eye1.style.height = "30px";
    eye2.style.height = "30px";
    eye1.style.width = "40px";
    eye2.style.width = "40px";
    eye2.style.left = "61%";
    nose.style.width = "25px";
    nose.style.height = "25px";
    nose.style.borderRadius = "10px 10px 0px 0px";
    mouth.style.backgroundColor = "black";
    mouth.style.width = "60px";
    mouth.style.left = "65px";
    mouth.style.border = "5px solid black";
    mouth.style.borderRadius = "20% 20% 10% 10%";
    cachete1.style.display = "initial";
    cachete2.style.display = "initial";
    age.innerHTML="Dead";
    boton2.style.visibility = "visible";
    boton1.style.display = "none";
    };
};

function startOver() {
    var reborn = document.getElementById("reborn");
    var age = document.getElementById("age");
    var man = document.getElementById("boy");
    var boton1 = document.getElementById("boton1");
    reborn.style.visibility= "visible";
    age.innerHTML="Reborn";
    man.style.display = "none";
    reborn.style.animationDelay = "2s";
    boton1.style.display = "none";
    setTimeout(() => {
        location.reload();
    }, 1500);
};

