vetor = [-5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -9]
function NumerosNegativos(numeros) {
    let negativos = 0
    for(let i = 0; i < numeros.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }
    }
    console.log(`${negativos}`)
}

NumerosNegativos(vetor)