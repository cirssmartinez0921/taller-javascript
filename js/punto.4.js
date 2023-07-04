function uefaEuro2023(equipos,resultados) {
    let equipoLocal = equipos [0];
    let equipoVisitante = equipos [1];
    let resultadoLocal = resultados [0];
    let resultadoVisitante = resultados [1];

    if (resultadoLocal > resultadoVisitante) {

        return " ¡el partido entre " + equipoLocal + " vs " + equipoVisitante + " gano " + equipoLocal + " ! "; 

    } else if (resultadoLocal < resultadoVisitante) {
        return " !el partido entre " + equipoLocal + " vs " + equipoVisitante + " gano " + equipoVisitante + " ! ";   
        
    } else {
        return "!el partido entre " + equipoLocal + " vs " + equipoVisitante + " quedaron en empate! ";
    }
}

console.log(uefaEuro2023(["belgica" , "croacia"], [4,2]));
console.log(uefaEuro2023(["españa", "finlandia"], [0,2]));
console.log(uefaEuro2023(["italia", "polonia"], [3,3]));