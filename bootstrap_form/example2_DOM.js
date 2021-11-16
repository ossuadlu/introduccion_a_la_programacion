const ex2button = document.querySelector('#ex2button')
if(ex2button){
    ex2button.addEventListener('click', function(event){
        const ex2namep1 = document.querySelector('#ex2namep1')
        const ex2namep2 = document.querySelector('#ex2namep2')
        const ex2agep1 = document.querySelector('#ex2agep1')
        const ex2agep2 = document.querySelector('#ex2agep2')
        const ex2result = document.querySelector('#ex2result')

        if(ex2namep1 && ex2namep2 && ex2agep1 && ex2agep2 && ex2result){
            let ex2namep1Value = ex2namep1.value
            let ex2namep2Value = ex2namep2.value
            let ex2agep1Value = Number(ex2agep1.value)
            let ex2agep2Value = Number(ex2agep2.value)
            var msg = "Please fill ALL fields";

            if(ex2namep1Value == '' || ex2namep2Value == '' || ex2agep1Value == '' || ex2agep2Value == ''){
                alert('ERROR')
            }else{
                if(ex2agep1Value > ex2agep2Value){
                    msg = ex2namep1Value + " is older than " + ex2namep2Value
                }else{
                    msg = ex2namep2Value + " is older than " + ex2namep1Value
                }          
            }
            ex2result.textContent = "MSG: " + msg
        }
    })
} 