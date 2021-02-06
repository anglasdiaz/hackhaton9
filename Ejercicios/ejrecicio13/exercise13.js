const consulNotas = function (nota1, nota2, nota3) {
    let aprobados = 0;
    let desaprobados = 0;
    const notas = [nota1, nota2, nota3];
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 13) {
            aprobados++;
        } else desaprobados++;
    }
    console.log(`El numero de aprobados es ${aprobados} y el desaprobados es ${desaprobados}`);
}
consulNotas(15, 10, 9);