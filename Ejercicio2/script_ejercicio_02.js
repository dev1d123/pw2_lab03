
console.log("Conexion exitosa");
var input = document.getElementById("in");

var basic = document.querySelectorAll(".b");
basic.forEach(b =>{
    b.addEventListener('click', function(){
        console.log("click", b.textContent);
        input = document.getElementById("in");
        input.value = input.value + b.textContent;
    });
});

var calcular = document.getElementById("calc");
var stack = document.getElementById("stack");

calcular.addEventListener('click', function(){
    var result = eval(input.value);
    input.value = result;
    stack.innerHTML += result + "<br>";
});