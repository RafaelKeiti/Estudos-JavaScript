vetornotas = [0.0, 4.9, 5.0, 6.9, 7.0, 8.9, 9.1, 10.0]

function ResultadoNotas(vetornotas) {
    for (i = 0; i < vetornotas.length; i++) {
        if (vetornotas[i] < 5) {
            console.log(`Conceito D - ${vetornotas[i]}`)
        } else if (vetornotas[i] >= 5 && vetornotas[i] < 7) {
            console.log(`Conceito C - ${vetornotas[i]}`)
        } else if (vetornotas[i] >= 7 && vetornotas[i] < 9) {
            console.log(`Conceito D - ${vetornotas[i]}`)
        } else if (vetornotas[i] >= 9 && vetornotas[i] <= 10){
            console.log(`Conceito A - ${vetornotas[i]}`)
        }
    }
}

ResultadoNotas(vetornotas)