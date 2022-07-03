// Ejercicio 1
function clickear(){
    const pelota = document.getElementById("imgPelota");
    if (imgPelota.style.border == ""){
        imgPelota.style.border = "2px solid red";
    } else{
        imgPelota.style.border = "";
    }
}

// Ejercicio 2
function verificar(){
    const stckr1 = document.getElementById("sticker1").value;
    const stckr2 = document.getElementById("sticker2").value;
    const stckr3 = document.getElementById("sticker3").value;
    const quantity1 = parseInt(stckr1);
    const quantity2 = parseInt(stckr2);
    const quantity3 = parseInt(stckr3);
    const total = quantity1 + quantity2 + quantity3;

    let text = document.getElementById("phrase");
    if(total <= 10){
        document.getElementById("phrase").innerHTML = "Tienes "+total+" stickers";
    }else{
        document.getElementById("phrase").innerHTML = "Tienes demasiados stickers";
    }
}

// Ejercicio 3
function ingresar(){
    const slct1 = document.getElementById("select1").value;
    const slct2 = document.getElementById("select2").value;
    const slct3 = document.getElementById("select3").value;
    const quantity1 = parseInt(slct1);
    const quantity2 = parseInt(slct2);
    const quantity3 = parseInt(slct3);
    const pswrd = slct1 + slct2 + slct3;

    let text = document.getElementById("password");
    if(slct1 == 9 && slct2 == 1 && slct3 == 1){
        document.getElementById("password").innerHTML = "Password 1 correcto"
    }else if(slct1 == 7 && slct2 == 1 && slct3 == 4){
        document.getElementById("password").innerHTML = "Password 2 correcto"
    }else{
        document.getElementById("password").innerHTML = "Password incorrecto"
    }
}


