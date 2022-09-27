vetornumeros = [1, 2, 3, 4, 5]
vetornumeros2 = [1, 2, 3, 4, 5]

function MultiplicaVetor(vetornumerico, multiplicador) {
    vetornovo = []
    for (let i = 0; i < vetornumerico.length; i++) {
        vetornovo.push(vetornumerico[i] * multiplicador)
    }
    console.log(vetornovo)
}

MultiplicaVetor(vetornumeros, 5)

function MultiplicaVetor2(vetornumerico, multiplicador) {
    vetornovo2 = []
    for (let ii = 0; ii < vetornumerico.length; ii++) {
        resultadovetor = vetornumerico[ii] * multiplicador
        if (resultadovetor > 5) {
            vetornovo2.push(vetornumerico[ii] * multiplicador)
        }
    }
    console.log(vetornovo2)
}
MultiplicaVetor2(vetornumeros2, 5)