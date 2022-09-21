function AssociacaoMensalidade(mes, valor) {
    if (mes > 0 && mes < 13) {
        let janeiro = mes - 1
        console.log('R$ ' +(valor * (1 + (5/100)) ** janeiro).toFixed(2).replace('.',','))
    } else {
        console.log('Mes invalido')
    }
}

AssociacaoMensalidade(5, 100)