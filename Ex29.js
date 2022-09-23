vetor = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
function ContarNumeros(numeros) {
    let dentro = 0
    let fora = 0
    for(let i = 0; i < numeros.length; i++)
    if (numeros[i] > 9 && numeros[i] < 21) {
        dentro++
    } else {
        fora++
    }
    console.log(`Incluindo 10 e 20 possuem ${dentro} numeros no intervalo. 
Fora deles possuem ${fora} numeros.`)
}

ContarNumeros(vetor)