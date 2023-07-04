// Escribe una función que tome una lista de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la lista no contiene ningún número, debe devolver 0. javascript

// Resultados esperados

// Entrada: [1, 5.2, 4, 0, -1]
// Salida: 9.2

// Entrada: []
// Salida: 0

// Entrada: [-2.398]
// Salida: -2.398

function sumarNumeros(lista) {
    
    
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    if (lista.length === 0) {
      return 0;
    }
    return suma;
  }
  

  console.log(sumarNumeros([1, 5.2, 4, 0, -1]));    
  console.log(sumarNumeros([]));                    
  console.log(sumarNumeros([-2.398]));  
