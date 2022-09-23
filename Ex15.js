function VendaDeCarros(modelo) {
    switch (modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso.')
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
            break
    }
}

VendaDeCarros('hatch')
VendaDeCarros('sedans')
VendaDeCarros('motocicletas')
VendaDeCarros('caminhonetes')
VendaDeCarros('offroad')