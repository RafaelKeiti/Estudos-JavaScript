function ClassificaAlunos(nota) {
    let notaFinal = Arrendondar(nota)
    if(notaFinal >= 40){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

function Arrendondar(nota){
    if((nota % 5) > 2){
      resultado = nota + (5 - (nota % 5))
      //resultado = Math.ceil(nota / 5) * 5; (Segunda forma de realizar)
      console.log(resultado2)
      return resultado
    } else {
        return nota
    }
}

ClassificaAlunos(38)
ClassificaAlunos(84)

