function TamanoArray() {
    let valor = document.getElementById('tamanoArray').value;
    let array = [];
    let random = 0;
    for(var i = 0; i < valor; i++){
        random = Math.ceil(Math.random() * (40 - 60)) + 60;
        if(array.indexOf(random) === -1){
            array.push(random);
        }
    } console.log(array);
}
