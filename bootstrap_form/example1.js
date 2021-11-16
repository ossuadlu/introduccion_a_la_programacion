let names = prompt('Ingrese el nombre')
let subjects = prompt('Ingrese cantidad materias')
let price = prompt('Ingrese valor cada materia')

subtotal = subjects * price
subtotal = Number(subjects) * Number(price)
subtotal = subtotal * .8

total = subtotal + 20000 + 8000
alert('Hi ' + names + '. Please to pay ' + total)