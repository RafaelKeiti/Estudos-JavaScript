function PlanoDeSaude(idade) {
    if (idade <= 0) {
        console.log('Idade Invalida')
    } else if (idade < 10) {
        console.log('R$' + (100 + 80))
    } else if (idade >= 10 && idade <= 30) {
        console.log('R$' + (100 + 50))
    } else if (idade > 30 && idade < 61) {
        console.log('R$' + (100 + 95))
    } else if (idade > 60) {
        console.log('R$' + (100 + 130))
    } 
}
PlanoDeSaude(5)
PlanoDeSaude(11)
PlanoDeSaude(35)
PlanoDeSaude(65)
PlanoDeSaude(0)