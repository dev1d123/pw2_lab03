console.log("Exito")
var elem = document.getElementsByTagName("body");
console.log(elem);
var random =Math.floor(Math.random()*10);
console.log("Numero aleatorio!", random);

var numerosAleatorios = new Set();

while(numerosAleatorios.size != 10){
    random =Math.floor(Math.random()*10);
    console.log("Numero aleatorio!", random);
    numerosAleatorios.add(random);
}
console.log(numerosAleatorios);
var arreglo = [];

numerosAleatorios.forEach(elem =>{
    arreglo.push(elem);
});

console.log(arreglo);

//obtener los elementos 
var buttons = document.querySelectorAll(".b");
console.log(buttons);
var index = 0;
buttons.forEach(b =>{
    b.textContent = arreglo[index];
    index++;
});