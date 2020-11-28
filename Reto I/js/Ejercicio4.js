function meses() {
    const MIN = 1;
    const MAX = 12;
    let aleatorio = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
    console.log(aleatorio);

    (aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7 || aleatorio == 8 || aleatorio == 10 || aleatorio == 12) ? console.log("El mes tiene 31 diás") :
    (aleatorio == 4 || aleatorio == 6 || aleatorio == 9 || aleatorio == 11) ? console.log("El mes tiene 30 diás") : console.log("El mes tiene 29 diás");
    document.getElementById("ejercicio4").innerHTML = aleatorio;
}

