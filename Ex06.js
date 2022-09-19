function JurosSimples(capitalinicial, taxadejuros, tempodeaplicacao){
    console.log(capitalinicial * taxadejuros * tempodeaplicacao)
}

JurosSimples(5, 10, 12)

function JurosComposto(capitalinicial2, taxadejuros2, tempodeaplicacao2){
    console.log(capitalinicial2 * (1 - taxadejuros2) ** tempodeaplicacao2)
}

JurosComposto(620, 0.015, 24)