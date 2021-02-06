const consulSalario = function () {
    let sueldo = 1500;
    let totalSueldo = 0
    for (let i = 0; i < 6; i++) {
        sueldo = sueldo * 1.10;
        totalSueldo += sueldo;
        console.log(`En el anio ${i + 1} el sueldo es ${Number.parseFloat(sueldo).toFixed(2)}`)
    }
    console.log(`El total de los 6 anios es ${Number.parseFloat(totalSueldo).toFixed(2)}`);
}
consulSalario();