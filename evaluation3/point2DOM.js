const ex2button = document.querySelector('#ex2button')
if(ex2button){
    ex2button.addEventListener('click', function(event){
        const ex2namep1 = document.querySelector('#ex2namep1')
        const ex2hoursworkedp1 = document.querySelector('#ex2hoursworkedp1')
        const ex2pricep1= document.querySelector('#ex2pricep1')
        const ex2resultp1 = document.querySelector('#ex2resultp1')
        const ex2namep2 = document.querySelector('#ex2namep2')
        const ex2hoursworkedp2= document.querySelector('#ex2hoursworkedp2')
        const ex2salarybasic= document.querySelector('#ex2salarybasic')
        const ex2ex2deductionsp2 = document.querySelector('#ex2ex2deductionsp2')
        const ex2bounesesp2 =document.querySelector('#ex2bounesesp2')
       
        if(ex2namep1 && ex2namep2 && ex2hoursworkedp1 && ex2pricep1 && ex2resultp1 &&  ex2salarybasic && ex2ex2deductionsp2 &&ex2salaryp2 &&ex2hoursworkedp2 && ex2ex2bounesesp2 ){
            let ex2namep1 = ex2namep1.value
            let ex2hoursworkedp1= Number ( ex2hoursworkedp1.value ) 
            let ex2pricep1 = Number (ex2pricep1.value)
            let ex2namep2 = ex2namep2.value
            let ex2resultp1 = ex2resultp1.value
            let ex2namep2 = ex2namep2.value
            let ex2hoursworkedp2= Number (ex2hoursworkedp2.value)
            let ex2salarybasic= Number (ex2salarybasic.value)
            let ex2ex2deductionsp2= Number(ex2ex2deductionsp2.value)
            let ex2bounesesp2= Number (ex2bounesesp2.value)
            let ex2result= ex2result.value
            
            var msg = "Please fill ALL fields";

            subtotal = subjects * price
subtotal = Number(subjects) * Number(price)
alert('Hi ' + names + '. Please to pay ' + total)

            
           
        }
    })
}