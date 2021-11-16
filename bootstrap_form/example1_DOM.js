const ex1button = document.querySelector('#ex1button')
if(ex1button){
    ex1button.addEventListener('click' , function(event) {
        const ex1subjects = document.querySelector('#ex1subjects')
        const ex1price = document.querySelector('#ex1price')
        const ex1name = document.querySelector('#ex1name')
        const ex1result = document.querySelector('#ex1result')

        if(ex1subjects && ex1price && ex1name && ex1result){
            let nameValue = ex1name.value
            let subjectsValue = Number(ex1subjects.value)
            let priceValue = Number(ex1price.value)
            var msg = ""

            if(nameValue == '' || subjectsValue == '' || priceValue == ''){
                msg = 'Please fill fields'
            }else{
                let total = calculate(subjectsValue, priceValue)
                msg = 'Hi ' + nameValue + '. Please to pay ' + total
                cleanFields()  
            } 
            ex1result.textContent = msg
        }else{
            alert('Error')
        }
    })
}

function calculate(subs, price){
    let subtotal = subs * price
    subtotal = subtotal * .8
    let total = subtotal + 20000 + 8000
    return total
}

function cleanFields(){
    ex1subjects.value = ""
    ex1price.value = ""
    ex1name.value = ""
} 