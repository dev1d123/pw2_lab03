//Arreglos para las palabras!

const arrEasy = [
    "manos",
    "lapiz",
    "playa",
    "campo",
    "salud",
    "fruta",
    "amigo",
    "carne",
    "huevo",
    "perro"
];

const arrMedium = [
    "elefante",
    "computar",
    "edificio",
    "hospital",
    "montañas",
    "mochilas",
    "ardillas",
    "delfines",
    "paraguas",
    "escobedo"
];

const arrHard = [
    "construccion",
    "constelacion",
    "refrigerador",
    "organizacion",
    "malentendido",
    "medioambiente"
];

let tries;

//obtener los botones
let menuInicial = document.getElementById("menu-inicial");
let messageDiff = document.getElementById("diff");
function diffSelection(cod){
    console.log("Se selecciono, ", cod);
    menuInicial.style.display = "none";

    if(cod == 1){
        messageDiff.innerHTML = "Facil";
        easyGame();
    }else if(cod == 2){
        messageDiff.innerHTML = "Medio";
        mediumGame();
    }else{
        messageDiff.innerHTML = "Dificil";
        hardGame();
    }
}

function easyGame(){
    tries = 10;
    //elegir la palabra!
    var index = Math.floor(Math.random()*11);
    var word = arrEasy[index];
    console.log("La palabra es: ", word);
    //definiendo los espacios en blanco!
    var hiddenWord = document.getElementById("word");
    var lives = document.getElementById("lives");
    l = "";
    s = "";
    for(var i = 0; i < 5; i++){
        s += "*";
    }
    for(var i = 0; i < tries; i++){
        l += "&#128515"
    }
    hiddenWord.innerHTML = s;
    lives.innerHTML = l;
    //easy!
    window.scrollBy(0,50); 
}

function mediumGame(){
    tries = 5
    //elegir la palabra!
    var index = Math.floor(Math.random()*11);
    var word = arrMedium[index];
    console.log("La palabra es: ", word);
    //definiendo los espacios en blanco!
    var hiddenWord = document.getElementById("word");
    var lives = document.getElementById("lives");
    l = "";
    s = "";
    for(var i = 0; i < 8; i++){
        s += "*";
    }
    for(var i = 0; i < tries; i++){
        l += "&#128515"
    }
    hiddenWord.innerHTML = s;
    lives.innerHTML = l;

    window.scrollBy(0,50); 
}


function hardGame(){
    tries = 3;
    //elegir la palabra!
    var index = Math.floor(Math.random()*7);
    var word = arrHard[index];
    console.log("La palabra es: ", word);
    //definiendo los espacios en blanco!
    var hiddenWord = document.getElementById("word");
    var lives = document.getElementById("lives");
    l = "";
    s = "";
    for(var i = 0; i < 12; i++){
        s += "*";
    }
    for(var i = 0; i < tries; i++){
        l += "&#128515"
    }
    hiddenWord.innerHTML = s;
    lives.innerHTML = l;

    window.scrollBy(0,50); 
}


