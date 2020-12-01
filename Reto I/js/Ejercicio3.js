function ejerRestMult() {
const MIN= 0;
const MAX= 10;
let num1 = 7;
let num2 = 5;
let resultado = "";
let aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
console.log(aleatorio);
    if (aleatorio <5 ) {
        resultado = "El resultado de la resta es: " + (num1 - num2);
        console.log("El resultado de la resta es: " + (num1 - num2));
    } else {
        resultado = "El resultado de la multiplicación es: " + (num1 * num2);
        console.log("El resultado de la multiplicación es: " + (num1 * num2));
    }
    document.getElementById("ejercicio3").innerHTML = (resultado);
}  