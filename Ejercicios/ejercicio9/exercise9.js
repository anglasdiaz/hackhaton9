const calcuEdad = function (year) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - year;
    console.log(`Tu edad es ${age}`);
}
calcuEdad(1990);