// Escriba una función para dividir una cadena y convertirla en una lista de palabras.

// Resultados esperados:

// Entrada:    "Robin Singh" 
// Salida:     ["Robin", "Singh"]

// Entrada:    "Me encantan los arreglos, son mis favoritos"
// Salida:     ["Yo", "amo", "arreglos", "ellos", "son", "mi", "favorito"]

function dividirCadena (cadena){
    let palabra = cadena.split ("");

    return palabra;
}

let cadena =  " mi nombre es cristhian y soy full stack";
let resultado = dividirCadena (cadena)

console.log(resultado);
