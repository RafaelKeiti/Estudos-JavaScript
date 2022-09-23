function SacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = CalcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }
        valorNota = CalcularValorNota(valorSaque)
    }
    return resultados(contador100, contador50, contador10, contador5, contador1)
}

function CalcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function resultados(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += ` / ${contador100} notas de 100 reais.`
    }
    
    if (contador50 > 0) {
        resultado += ` / ${contador50} notas de 50 reais.`
    }
    
    if (contador10 > 0) {
        resultado += ` / ${contador10} notas de 10 reais.`
    }
    
    if (contador5 > 0) {
        resultado += ` / ${contador5} notas de 5 reais.`
    }
    
    if (contador1 > 0) {
        resultado += ` / ${contador1} notas de 1 real.`
    }
    return resultado
}


console.log(SacarDinheiro(12));