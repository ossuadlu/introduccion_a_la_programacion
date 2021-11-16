// Capturar un elemento de tipo form dentro del DOM
const form = document.querySelector("form")

// Mostrar el contenido del elemento form
console.log(form)

// Validar que form no sea un null
if(form){
    console.log('it is a form');

    // Crear un Listener para que JS reaccione a un evento
    // En este caso el evento es submit.
    // Cuando JS capture el evento, ejecutará la función
    form.addEventListener('submit', function(event){
        console.log('Sending');

        // Prevenir la acción por defecto del evento
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
