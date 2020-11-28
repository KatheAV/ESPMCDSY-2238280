function restaMultiplicacion() {
    const valor1 = 5;
    const valor2 = 4;
    const resta = valor1 - valor2;
    const multiplicacion = valor1 * valor2;
    console.log("El resultado de la resta es: " + resta + " y el resultado de la multiplicación es: " + multiplicacion);
    document.getElementById("ejercicio2").innerHTML = ("El resultado de la resta es: " + resta + " y el resultado de la multiplicación es: " + multiplicacion);
}