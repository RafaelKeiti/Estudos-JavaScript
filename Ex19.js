function PedidosLanchonete(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log('Cachorro Quente ', 'R$ ' + (quantidade * 3.00).toFixed(2).replace(".",","))
            break
        case 200:
            console.log('Hambúrguer Simples ', 'R$ ' + (quantidade * 4.00).toFixed(2).replace(".",","))
            break
        case 300:
            console.log('Cheeseburguer ', 'R$ ' + (quantidade * 5.50).toFixed(2).replace(".",","))
            break
        case 400:
            console.log('Bauru ', 'R$ ' + (quantidade * 7.50).toFixed(2).replace(".",","))
            break
        case 500:
            console.log('Refrigerante ', 'R$ ' + (quantidade * 3.50).toFixed(2).replace(".",","))
            break
        case 600:
            console.log('Suco ', 'R$ ' + (quantidade * 2.80).toFixed(2).replace(".",","))
            break
        default:
            console.log('Opcao Invalida')
            break
    }
}

PedidosLanchonete(100, 2)
PedidosLanchonete(200, 2)
PedidosLanchonete(300, 2)
PedidosLanchonete(400, 2)
PedidosLanchonete(500, 2)
PedidosLanchonete(600, 2)
PedidosLanchonete(700, 2)