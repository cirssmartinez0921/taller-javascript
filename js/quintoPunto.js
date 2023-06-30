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
        resultado.push(lista2[j]);
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
  
    return resultado;
  }

  let lista1 = [1,2,3,4,5,6,]
  let lista2 = [7,8,9,10]

  let resultado = combinarListas (lista1,lista2)

  console.log (resultado);
  