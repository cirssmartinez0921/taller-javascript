// Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

// Recibe una lista con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

// ¡Devuelve True si estás mejor, de lo contrario False!

// // Nota: Sus puntos no están incluidos en la lista de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la lista dada!

function SoyMejor(PuntajeCompaneros, MiPuntaje) {
    PuntajeCompaneros.push (MiPuntaje);

    let sumaPuntajes = PuntajeCompaneros.reduce ((a,b) => a + b, 0);
    let promedio = sumaPuntajes / PuntajeCompaneros.length;

    if (MiPuntaje > promedio) {
        return true;   
     } else {
        return false;
     }
}

     let PuntajeCompaneros = [8, 7, 6, 5];
     let MiPuntaje = 9;

     let SoyMejorQuePromedio =SoyMejor(PuntajeCompaneros,MiPuntaje);

     console.log(SoyMejorQuePromedio);
