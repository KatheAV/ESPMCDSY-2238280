function ejerMeses() {
    const MIN = 1;
    const MAX = 12;
    let mes = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
    console.log(mes);
    let resultado = "";

    resultado = (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) ? "El mes tiene 31 días" : (mes == 4 || mes == 6 || mes == 9 || mes == 11) ? "El mes tiene 30 días" : "El mes tiene 29 días";
    document.getElementById("ejercicio4").innerHTML = (resultado);

}




