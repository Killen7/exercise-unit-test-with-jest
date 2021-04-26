// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euros) => {
    let respuesta = euros * oneEuroIs.USD;
    return respuesta;
}

const fromDollarToYen = (dolares) => {
    let respuesta = (dolares / oneEuroIs.USD) * oneEuroIs.JPY;
    return respuesta;
}

const fromYanToPound = (yen) => {
    let respuesta = (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return respuesta;
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromEuroToDollar , fromDollarToYen , fromYanToPound};
