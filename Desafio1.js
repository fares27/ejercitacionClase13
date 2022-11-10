let movimientos = [1000,2000,3000,-4000, -2000, 2000];

function calcularTotales(operacionesBancarias){
    let saldo = 0;
    let acumDebitos = 0;
    let acumCreditos = 0;
    for (let i = 0 ; i < operacionesBancarias.length ; i++){
        if (operacionesBancarias[i] > 0){
            acumCreditos = acumCreditos + operacionesBancarias[i];
        }
            else {
                acumDebitos = acumDebitos + operacionesBancarias[i];
            }
    }
    return [acumDebitos,acumCreditos,acumDebitos+acumCreditos]
}

function detalleCliente(nombre, apellido, movimientos, funcion){
    let totales = funcion(movimientos);
    return [totales,nombre,apellido];
}

let variable = detalleCliente("Pedro", "Garcia", movimientos, calcularTotales);

console.log("Estimado/a " + variable[1] + " " + variable[2])
console.log("El monto total de los depósitos es de: " + variable[0][1]);
console.log("El monto total de los retiros es de: " + variable[0][0]);
console.log("Por lo tanto su saldo actual en la cuenta es de: " + variable[0][2]);


// PRUEBA CAMBIANDO UN ARCHIVO