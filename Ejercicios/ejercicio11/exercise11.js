const consultBono = function (year) {
    if (year === 1) {
        console.log(`Recibes $100`)
    } else if (year === 2) {
        console.log(`Recibes $200`)
    } else if (year === 3) {
        console.log(`Recibes $300`)
    } else if (year === 4) {
        console.log(`Recibes $400`)
    } else {
        console.log(`Recibes $1000`)
    }
}
consultBono(4);