
function ImprimirImpares(inicio, fim) {
    if (inicio > fim) {
        variavelaux = inicio
        inicio = fim
        fim = variavelaux
    }
    for (i = inicio; i < fim; i++) {
        if (i % 2 > 0) {
            console.log(i)
        }
    }
}

ImprimirImpares(0, 50)