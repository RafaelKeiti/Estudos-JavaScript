vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
function MediaAritmetica(numeros) {
    let total = 0
    let media = 0
    for(let i = 0; i < vetor.length; i++) {
       total = total + vetor[i]
       media = total / numeros[i] 
    }
    console.log(`Total do vetor = ${total} / Media = ${media}`)
}

MediaAritmetica(vetor)