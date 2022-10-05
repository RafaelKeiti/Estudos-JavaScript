function progressoes(n, a1, r) {
    for (let i = 0; i < n; i++){
        console.log(i + r*i)
    }
    console.log('TOTAL = ' +(((a1 + (a1 + ((n - 1) * r))) * n) / 2))
}


function progressoes2(n, a1, r) {
    for (let i = 0; i < n; i++){
        console.log(a1 * (r**i))
    }
    console.log('TOTAL = ' +(a1 * ((r**n) - 1)) / (r - 1))
}
progressoes(50, 5, 5)
console.log('-------------------------')
progressoes2(10, 5, 3)