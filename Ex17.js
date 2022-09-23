function PlanoSalario(plano, SalarioAtual) {
    switch (plano) {
        case 'A':
            console.log(SalarioAtual + (SalarioAtual * (10/100)))
            break
        case 'B':
            console.log(SalarioAtual + (SalarioAtual * (15/100)))
            break
        case 'C':
            console.log(SalarioAtual + (SalarioAtual * (20/100)))
            break
        default:
            console.log('Plano Invalido')
            break
    }
}

PlanoSalario('A', 5000)
PlanoSalario('B', 5000)
PlanoSalario('C', 5000)
PlanoSalario('D', 5000)