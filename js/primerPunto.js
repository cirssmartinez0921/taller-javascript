// Valor: 0.5 - ¿Va a sobrevivir?

// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

// Responda a la pregunta y devuelva si es así, de lo contrario :)truefalse
function tieneSuficientesBalas(numDragones) {
    let balasNecesarias = Number (prompt("¿cuantas balas quieres cargar?"));
    if(balasNecesarias >= 4) {
      return true; 
    } else {
      return false; 
    }
  }

  let balas = tieneSuficientesBalas();
  console.log(balas); 
  