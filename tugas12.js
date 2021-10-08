function panggilData(){
  var buah = ['Pisang', 'Jeruk', 'Apel', 'Mangga']
  console.log(buah)
  buah.pop()
  return buah
}

function panggilBuah(){
  var buah2 = ['Pisang', 'Jeruk', 'Apel']
  buah2.shift()
  return buah2
}

console.log(panggilData())
console.log(panggilBuah())