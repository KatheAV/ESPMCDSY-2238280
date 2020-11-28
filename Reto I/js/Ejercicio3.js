function Numaleatorio() {
var num1= 8;
var num2= 6;
let aleatorio = Math.round(Math.random()*10);
console.log(aleatorio);
    if (aleatorio <5 ) {
        console.log(num1 - num2);
        document.getElementById("ejercicio3").innerHTML = (num1 - num2);
    } else {
        console.log(num1 * num2);
    } document.getElementById("ejercicio3").innerHTML = (num1 * num2);
}
       