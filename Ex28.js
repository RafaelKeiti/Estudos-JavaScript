function ParesEimpares(numerosvetor) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < numerosvetor.length; i++) {
        if (numerosvetor[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`PARES ${pares} / IMPARES ${impares}`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
ParesEimpares(vetor)