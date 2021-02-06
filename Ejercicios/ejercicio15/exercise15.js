const canIvote = function (age) {
    let newAge = Number.parseInt(age);
    if (newAge >= 18) {
        console.log(`Puede votar`)
    } else {
        console.log(`No puede votar`);
    }
}

canIvote(22);