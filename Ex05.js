function FormatandoDinheiro(valor1, valor2){
    resultado = valor1 + valor2
    console.log('R$ ' + resultado.toFixed(2).replace(".",","))
}
FormatandoDinheiro(0.1, 0.2)