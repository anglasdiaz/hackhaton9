const contarFocos = function () {
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    userInput = prompt('Ingrese una opciones verde = 1, blanco = 2, rojo = 3 si quieres salir escribe: quit');
    while (userInput !== 'quit') {
        if (Number.parseInt(userInput) === 1) {
            verde++;
        } else if (Number.parseInt(userInput) === 2) {
            blanco++;
        } else if (Number.parseInt(userInput) === 3) {
            rojo++;
        }
        userInput = prompt('Ingrese una opciones verde = 1, blaco = 2, rojo = 3 si quieres salir escribe: quit')
    }
    console.log(`El numero de verde es:${verde}, blanco es: ${blanco} y rojo es ${rojo}`);
}
contarFocos();