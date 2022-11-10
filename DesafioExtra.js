// Primera
function numerosSiguientes(numero){
    for (let i = numero; i <= numero + 10; i++){
        console.log(i);
    }
}

// SET DE PRUEBAS
//numerosSiguientes(1);
//numerosSiguientes(20);
//numerosSiguientes(80);

// Desde el 1 de 3 en 3 hasta el 57
function numerosSiguientesTresEnTres(){
    for (let i = 1; i <= 57; i = i + 3){
        console.log(i);
    }
}

//numerosSiguientesTresEnTres();

// Sumatoria entre los número del 0 al 100
function sumatoriaACien(){
    let sum = 0;
    for (let i = 0; i <= 100; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumatoriaACien());

// Funcion que recibe cadena de texto devuelve lo mismo pero en mayuscula.
function convertirAMayus(cadenaTexto){
    let cadenaMayus = [];
    for (let i = 0; i < cadenaTexto.length; i++ ){
        cadenaMayus[i] = cadenaTexto[i].toUpperCase();
    }
    return cadenaMayus.join("");
}

console.log(convertirAMayus ("hola"));



// Funcion que recibe cadena de texto devuelve lo mismo pero en mayuscula.
function convertirAMayus2(cadenaTexto){
    let cadenaMayus = "";
    for (let i = 0; i < cadenaTexto.length; i++ ){
        cadenaMayus = cadenaMayus + cadenaTexto[i].toUpperCase();
    }
    return cadenaMayus;
}

console.log(convertirAMayus2 ("hola"));

// Funcion que reciba un array de número positivos pero retorna solo los pares (nuevo array)
function devolverPares(numerosPositivos){
    let nuevoArray = [];
    for(let i = 0; i < numerosPositivos.length; i++){
        if (numerosPositivos[i] % 2 == 0){
            nuevoArray.push(numerosPositivos[i])
        }
    }
    return nuevoArray;   
}

console.log(devolverPares([2,3,4,5,6,7,8,9]));
