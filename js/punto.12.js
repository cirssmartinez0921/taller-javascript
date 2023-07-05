// Crea una función llamada max (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

// Nota: No utilices el método Math.max de JavaScript.

// // Código de prueba
// console.log( max( [ 1, 2, 3, 4 ] ) ) // 4
// console.log( max( [ 63, 85, 39, 24, 3 ] ) ) // 85

let max = (numeros) =>{
    let maximo = numeros [0];

    for (let i = 1; i < numeros.length; i++) {
        
        if (numeros [i] > maximo) {
            maximo = numeros [i];
        }
    }
    return maximo;
};
console.log( max( [ 1, 2, 3, 4 ] ) );
console.log( max( [ 63, 85, 39, 24, 3 ] ) );