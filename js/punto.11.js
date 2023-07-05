
// // Crea una función flecha y asígnala a una variable obtenerImpares. La función debe recibir un arreglo de números y retornar todos los impares.

// // Nota: Utiliza el método filter y pásale una función flecha como argumento.

// // // Código de prueba
// // console.log( obtenerImpares( [ 1, 2, 3, 4, 5] ) );
// // console.log( obtenerImpares( [ 64, 35, 27 ] ) );
// // console.log( obtenerImpares( [] ));
// // Valores esperados del código anterior

// // [ 1, 3, 5 ]
// // [ 35, 27 ]
// []
let numerosImpares =(numeros) => {
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {

        if (numeros [i] % 2 !==0) {
            impares.push (numeros [i]);
        }
    }
    return impares; 
} ;
console.log(numerosImpares ([5, 8, 2, 3, 9, 4]));