const ex1button = document.querySelector('#ex1button')
console.log (form)
if(ex1button){
    ex1button.addEventListener('click' , function(form) {
        console.log ('sending');
        const ex1rout = document.querySelector('#ex1ex1rout')
        const ex1licenseplate = document.querySelector('#ex1ex1licenseplate')
        const ex1price = document.querySelector('#ex1ex1price')
        const ex1numberpassagers = document.querySelector('#ex1numberpassagers')
        const ex1result = document.querySelector('#ex1result')
        
        if(ex1rout && ex1price && ex1licenseplate&& 
            numberpassagers && ex1result){
            let routValue = ex1rout.value
            let licenseplateValue = Number(ex1licenseplate.value)
            let priceValue = Number(ex1price.value)
            let numberpassagersvalue = Number(ex1numberpassagers)
            var msg = ""

            if(routValue == '' || licenseplateValue == '' || priceValue == ''||numberpassagersvalue ){
                msg = 'Please fill fields'
            }else{
                let total = calculate(numberpassagersvalue, priceValue)
                msg = total
                cleanFields()  
            } 
            ex1result.textContent = msg
        }else{
            alert('Error')
        }
    })
}

function calculate(numberpassagers, price){
    let total = numberpassagers * price
    return total
}

function cleanFields(){
    ex1rout.value = ""
    ex1price.value = ""
    ex1licenseplate.value = ""
}