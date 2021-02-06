const buscarMenor = function () {
    const edades = [];


    const personas = [{
        name: 'Alejandra',
        edad: 25
    },
    {
        name: 'Pedro',
        edad: 20
    },
    {
        name: 'Francisco',
        edad: 28
    }]

    personas.forEach(persona => {
        edades.push(persona.edad);
    });

    let menor = edades[0];

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < menor) {
            menor = edades[i];
        }
    }
    personas.forEach(persona => {
        if (menor === persona.edad) {
            console.log(`El menor es ${persona.name} con ${persona.edad} anios`);
        }
    });
}
buscarMenor();