// Valor: 0.25 - Convertir una cadena en una lista

// Escriba una función para dividir una cadena y convertirla en una lista de palabras.

let cadena = "hola, esta es una cadena";

let palabras = dividirCadena (cadena);

function dividirCadena (cadena){
    return cadena.split (" ");
}

console.log(palabras);