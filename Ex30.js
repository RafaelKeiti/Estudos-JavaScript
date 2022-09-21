vetor = [0, 30, 1, 5, 6, 40]
function MaiorMenor(numeros) {
    let maiornumero
    let menornumero
    for (i = 0; i < numeros.length; i++) {
        if (maiornumero == undefined && menornumero == undefined) {
            maiornumero = numeros[i]
            menornumero = numeros[i]
        } else {
            if (numeros[i] > maiornumero) {
                maiornumero = numeros[i]
            }
            if (numeros[i] < menornumero) {
                menornumero = numeros[i]
            }
        }
    }
    console.log(`Numero maior: ${maiornumero} / Numero menor: ${menornumero}`)
}
MaiorMenor(vetor)