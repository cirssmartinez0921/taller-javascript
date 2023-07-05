// Valor: 1.0 - Combinar dos matrices ordenadas en una

// Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función combinarListas( lista1, lista2 ), donde lista1 y lista2 son las listas ordenadas originales.

// No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.

// Nota: lista1 y lista2 pueden clasificarse en diferentes órdenes. También lista1 y lista2 pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

      let lista1 = [2, 4, 1];
      let lista2 = [7, 8, 8, 9, 10];

      let combinar = lista1.concat (lista2);

      const OrdenarNumeros = combinar
       OrdenarNumeros.sort (function(a,b){
        return  (a - b);
       });
       
       console.log([... new Set (OrdenarNumeros)]);
  