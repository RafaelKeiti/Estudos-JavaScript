let jogos = "0, 15, 30, 500"

function PontuacoesPorJogo(Jogos) {
    let pontuacoes = jogos.split(", ")
    let records = 0
    let jogoruim = 1
    let melhorponto = pontuacoes[0]
    let menorponto = pontuacoes[0]
    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > melhorponto) {
            melhorponto = pontuacoes[i]
            records++
        } else if (pontuacoes[i] < menorponto) {
            menorponto = pontuacoes[i]
            jogoruim = i + 1
        }
    }
    return ['Quebrou o record = ' + records, ' Jogo Ruim = ' + jogoruim]
}

console.log(PontuacoesPorJogo(jogos))