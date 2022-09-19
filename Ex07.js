function ResolveBhaskara(ax2, bx, c) {
    resultado = []
    delta = ((bx ** 2) - (4 * ax2 * c))
    if (delta < 0) {
        console.log('Delta negativo!')
    } else {
        x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        resultado.push(x1)
        resultado.push(x2)
        console.log(resultado)
    }
}
ResolveBhaskara(1, 3, 2)
ResolveBhaskara(3, 1, 2)


