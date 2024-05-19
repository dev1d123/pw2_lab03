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

var tries;
var word;
var elem;
var lives;
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
    game(tries, word, elem, lives);
}



function easyGame(){
    tries = 6;
    //elegir la palabra!
    var index = Math.floor(Math.random()*11);
    word = arrEasy[index];
    console.log("La palabra es: ", word);
    //definiendo los espacios en blanco!
    elem = document.getElementById("word");
    lives = document.getElementById("lives");
    l = "";
    s = "";
    for(var i = 0; i < 5; i++){
        s += "*";
    }
    for(var i = 0; i < tries; i++){
        l += "&#128515"
    }
    elem.innerHTML = s;
    lives.innerHTML = l;
    window.scrollBy(0,50); 
}

function mediumGame(){
    tries = 3;
    //elegir la palabra!
    var index = Math.floor(Math.random()*11);
    word = arrMedium[index];
    console.log("La palabra es: ", word);
    //definiendo los espacios en blanco!
    elem = document.getElementById("word");
    lives = document.getElementById("lives");
    l = "";
    s = "";
    for(var i = 0; i < 8; i++){
        s += "*";
    }
    for(var i = 0; i < tries; i++){
        l += "&#128515"
    }
    elem.innerHTML = s;
    lives.innerHTML = l;
    window.scrollBy(0,50); 


}


function hardGame(){
    tries = 2;
    //elegir la palabra!
    index = Math.floor(Math.random()*7);
    word = arrHard[index];
    console.log("La palabra es: ", word);
    //definiendo los espacios en blanco!
    elem = document.getElementById("word");
    lives = document.getElementById("lives");
    l = "";
    s = "";
    for(var i = 0; i < 12; i++){
        s += "*";
    }
    for(var i = 0; i < tries; i++){
        l += "&#128515"
    }
    elem.innerHTML = s;
    lives.innerHTML = l;
    window.scrollBy(0,50); 
}




//Se dibujara una fase de cada dibujo!
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawHangman(stage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.strokeStyle = 'black'; 
    ctx.lineWidth = Math.max(2, Math.floor(canvas.width / 200));
    console.log(canvas.width) 
    const scale = 0.40; //definir el tamaño del lienzo
    const startX = 20 * scale;
    const startY = canvas.height - 20 * scale;
    const headX = 200 * scale;
    const headY = 80 * scale;
    const bodyY = 110 * scale;
    const armY = 140 * scale;
    const armLeftX = 150 * scale;
    const armRightX = 250 * scale;
    const legY = 250 * scale;
    const legTopX = 200 * scale;
    const legLeftX = 150 * scale;
    const legRightX = 250 * scale;
    const legBottomY = 330 * scale;

    // Dibujar la horca
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, 20 * scale);
    
    ctx.moveTo(startX - 5 , startY);
    ctx.lineTo(startX - 5, 20 * scale);

    ctx.lineTo(200 * scale, 20 * scale);
    
    ctx.lineTo(200 * scale, 50 * scale);
    ctx.stroke();
    
    //cabeza
    if (stage >= 1) {
        ctx.beginPath();
        ctx.arc(headX, headY, 30 * scale, 0, Math.PI * 2);
        ctx.stroke();
    }

    //linea del cuerpo
    if (stage >= 2) {
        ctx.beginPath();
        ctx.moveTo(headX, bodyY);
        ctx.lineTo(headX, 250 * scale);
        ctx.stroke();
    }

    //linea del brazo izq
    if (stage >= 3) {
        ctx.beginPath();
        ctx.moveTo(headX, armY);
        ctx.lineTo(armLeftX, 200 * scale);
        ctx.stroke();
    }

    //linea del brazo derecho
    if (stage >= 4) {
        ctx.beginPath();
        ctx.moveTo(headX, armY);
        ctx.lineTo(armRightX, 200 * scale);
        ctx.stroke();
    }

    //linea de la pierna izq
    if (stage >= 5) {
        ctx.beginPath();
        ctx.moveTo(legTopX, legY);
        ctx.lineTo(legLeftX, legBottomY);
        ctx.stroke();
    }

    //linea de la pierna der
    if (stage >= 6) {
        ctx.beginPath();
        ctx.moveTo(legTopX, legY);
        ctx.lineTo(legRightX, legBottomY);
        ctx.stroke();
    }
}
drawHangman(0);

function game(intentos, palabra, texto, vidas) {
    let totalTries = intentos;
    
    console.log("Intentos: ", intentos);
    console.log("palabra: ", palabra);
    console.log("texto: ", texto);
    console.log("vidas: ", vidas);

    let progreso = texto.textContent.split('');

    function actualizarProgreso(letra) {
        let encontrado = false;
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra) {
                progreso[i] = letra;
                encontrado = true;
            }
        }
        return encontrado;
    }

    function haGanado() {
        return progreso.join('') === palabra;
    }

    function actualizarPantalla() {
        texto.textContent = progreso.join('');
        if(totalTries == 6){
            drawHangman(totalTries-intentos);
        }else if(totalTries == 3){
            drawHangman((totalTries-intentos) * 2);
        }else{
            drawHangman((totalTries-intentos) * 3);
        }
        
    }

    function manejarLetra(letra) {
        if (!actualizarProgreso(letra)) {
            intentos--;
            vidas.textContent = "";
            var l = "";
            for(var i = 0; i < intentos; i++){
                l += "&#128515"
            }
            vidas.innerHTML = l;
        }
        if (haGanado()) {
            alert("¡Has ganado! La palabra era: " + palabra);
            location.reload();

        } else if (intentos === 0) {
            alert("¡Has perdido! La palabra era: " + palabra);
            location.reload();
        }

        actualizarPantalla();
    }

    document.querySelectorAll('.kw').forEach(button => {
        button.addEventListener('click', () => {
            let letra = button.textContent;
            manejarLetra(letra);
        });
    });

    actualizarPantalla();
}
