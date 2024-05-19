console.log("Conexion exitosa");
var input = document.getElementById("in");

var basic = document.querySelectorAll(".b");
basic.forEach(b => {
    b.addEventListener('click', function() {
        console.log("click", b.textContent);
        input = document.getElementById("in");
        if (b.textContent === "Del") {
            input.value = input.value.slice(0, -1);
        } else if (b.textContent === "pi") {
            input.value += Math.PI;
        } else if (b.textContent === "sqrt") {
            input.value += "Math.sqrt(";
        } else if (b.textContent === "pow2") {
            input.value += "**2";
        } else {
            input.value += b.textContent;
        }
    });
});

var calcular = document.getElementById("calc");
var stackTableBody = document.querySelector("#stack-table tbody");

calcular.addEventListener('click', function() {
    try {
        var expression = input.value;
        var result = eval(expression);
        input.value = result;
        
        var newRow = stackTableBody.insertRow(0); 
        var cellExpression = newRow.insertCell(0);
        var cellResult = newRow.insertCell(1);
        cellExpression.textContent = expression;
        cellResult.textContent = result;
        input.value = "";
    } catch (error) {
        alert("Error, expresion incorrecta");
        input.value = "";
    }
});