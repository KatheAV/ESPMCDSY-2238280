function ejerMultRest() {
    const VALOR1 = 5;
    const VALOR2 = 4;
    const RESTA = VALOR1 - VALOR2;
    const MULTIPLICACION = VALOR1 * VALOR2;
    console.log("El resultado de la resta es: " + RESTA + " y el resultado de la multiplicación es: " + MULTIPLICACION);
    document.getElementById("ejercicio2").innerHTML = ("El resultado de la resta es: " + RESTA + " y el resultado de la multiplicación es: " + MULTIPLICACION);
}