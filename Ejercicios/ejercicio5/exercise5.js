const areaCirculo = function (radio) {
    let area = Math.PI * Math.pow(radio, 2);
    console.log(`El area de un circulo es: ${Number.parseFloat(area).toFixed(2)}`);
}
areaCirculo(5);