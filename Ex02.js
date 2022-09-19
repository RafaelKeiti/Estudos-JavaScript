function ClassificaTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('Equilátero')
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

ClassificaTriangulo(1, 1, 1)
ClassificaTriangulo(1, 5, 1)
ClassificaTriangulo(6, 5, 1)