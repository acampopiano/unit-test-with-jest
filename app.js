// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yen japones
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a libras esterlinas
    let valueInPound = valueInYen * 0.8;
    // retornamos el valor
    return valueInPound;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))
console.log("3.5 euro equivale a : " + fromEuroToDollar(3.5) + " dolares" );
console.log("1 dolar equivale a : " + fromDollarToYen(1) + " yenes" );
console.log("1 yen equivale a : " + fromYenToPound(1) + " libras esterlinas" );
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound  };
