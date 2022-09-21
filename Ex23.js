function MediaPonderada(codigoaluno, nota1, nota2, nota3) {
    let media = 0
    if (nota1 > nota2 && nota1 > nota3) {
        media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
    } else if (nota2 > nota1 && nota2 > nota3) {
        media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
    } else if (nota3 > nota1 && nota3 > nota2) {
        media = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10
    }
    if (media >= 5) {
        console.log(`Codigo do Aluno = ${codigoaluno} / Nota1 = ${nota1}, Nota2 = ${nota2}, Nota3 = ${nota3} 
        / Media Ponderada = ${media} / Situacao = (APROVADO)`)
    } else {
        console.log('Reprovado')
    }
}


MediaPonderada(100, 6, 7, 6)