function fatorial(num) {
    if(num < 0){
        console.log('Opcao Invalida')
    } else if(num == 0){
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))