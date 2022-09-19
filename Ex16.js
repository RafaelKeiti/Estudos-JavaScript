function calculadora(num1, sinal, num2) {
    switch (sinal) {
        case '+':
            console.log(num1 + num2)
            break
        case '-':
            console.log(num1 - num2)
            break
        case '*':
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 / num2)
            break
        default:
            console.log('Sinal invalido')
    }
}

calculadora(1, '+', 1)
calculadora(1, '-', 1)
calculadora(1, '*', 2)
calculadora(4, '/', 2)
calculadora(1, 't', 1)