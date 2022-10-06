let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9 ,10]

function TrocarValoresVetor(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for (i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        console.log('Os vetores nao sao iguais.')
    }
    console.log(vetorA)
    console.log(vetorB)
}

TrocarValoresVetor(vetorA, vetorB)