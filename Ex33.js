vetorInteiro = [1, 2, 3, 4]
vetorString = ['Oi', 'Tudo bem?', 'Me chamo', 'Rafael']
vetorDouble = [2.5, 2.8, 5.5, 8.8]

function ConcatenarVetores(vetorInteiro, vetorString, vetorDouble) {
    nums = vetorInteiro.concat(vetorString, vetorDouble);
    nums2 = vetorInteiro.concat(vetorDouble, vetorString);
    console.log(nums)
    console.log('')
    console.log(nums2)
}
ConcatenarVetores(vetorInteiro, vetorString, vetorDouble)
