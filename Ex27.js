function AlturaCriancas(altura1, altura2, taxadecrescimento1, taxadecrescimento2) {
    if (altura1 == altura2) {
        if (taxadecrescimento1 > taxadecrescimento2) {
            console.log('A criança 1 vai ser maior que a criança 2')
        } else if (taxadecrescimento2 > taxadecrescimento1) {
            console.log('A criança 2 vai ser maior que a criança 1')
        } else {
            console.log('As duas crianças possuem altura e taxa de crescimento iguais!')
        }
    } else if (altura1 > altura2) {
        if (taxadecrescimento1 >= taxadecrescimento2) {
            console.log('A criança 2 não ultrapassará a criança 1')
        } else {
            console.log(`A criança 2 ultrapassará a criança 1 em ${CalcularTempo(altura2, altura1, taxadecrescimento2, taxadecrescimento1)} anos.`)
        }
    } else if (altura2 > altura1) {
        if (taxadecrescimento2 >= taxadecrescimento1) {
            console.log('A criança 1 não ultrapassará a criança 2')
        } else {
            console.log(`A criança 1 ultrapassará a criança 2 em ${CalcularTempo(altura1, altura2, taxadecrescimento1, taxadecrescimento2)} anos.`)
        }
    }
}

function CalcularTempo(alturacrianca1, alturacrianca2, taxacrianca1,taxacrianca2) {
    let anos = 0
    while(alturacrianca1 < alturacrianca2) {
        alturacrianca1 += taxacrianca1
        alturacrianca2 += taxacrianca2
        anos++
    }
    return anos
}

AlturaCriancas(150, 150, 4, 2)
AlturaCriancas(150, 150, 2, 4)
AlturaCriancas(130, 150, 4, 2)
console.log('')
AlturaCriancas(150, 130, 4, 2)
AlturaCriancas(150, 130, 2, 4)
console.log('')
AlturaCriancas(130, 150, 2, 4)
AlturaCriancas(130, 150, 4, 2)
