// Valor: 1.0 - Combinar dos matrices ordenadas en una

// Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función combinarListas( lista1, lista2 ), donde lista1 y lista2 son las listas ordenadas originales.

// No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.

// Nota: lista1 y lista2 pueden clasificarse en diferentes órdenes. También lista1 y lista2 pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

function combinarListas(lista1, lista2) {
    let resultado = [];

    
    let i = 0;
    let j = 0;
  
    while (i < lista1.length && j < lista2.length) {
      if (lista1[i] < lista2[j]) {
        resultado.push(lista1[i]);
        i++;
      } else if (lista1[i] > lista2[j]) {
        resultado.push(lista2[j]);
        j++;
      } else {
        resultado.push(lista1[i]);
        i++;
        j++;
      }
    }
  
    while (i < lista1.length) {
      resultado.push(lista1[i]);
      i++;
    }
  
    while (j < lista2.length) {
      resultado.push(lista2[j]);
      j++;
    }
  
    return [... new Set(resultado)];
  }

  let lista1 = [2,4,1]
  let lista2 = [.7,8,9,10]

  


  let resultado = combinarListas (lista1,lista2)

  console.log (resultado);
  