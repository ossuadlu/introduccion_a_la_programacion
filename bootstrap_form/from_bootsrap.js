
const form = document.querySelector("form")
console.log(form)

if(form){
    console.log('it is a form');


    form.addEventListener('submit', function(event){
        console.log('Sending');

    
        event.preventDefault()

        const email = document.querySelector('#email')
        const password = form.querySelector('#password')
        const check = form['check']

        if(email && password && check){
            if(email.value == '' || email.value == null){
                alert('ERROR: Empty email')
            }else if(password.value == '' || password.value == null){
                alert('ERROR: Empty password')
            }else if(!check.checked){
                alert('ERROR: Empty check')
            }else{
                console.log('Verified');
                form.submit()
            }
        }
    })
}
