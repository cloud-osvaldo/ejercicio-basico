// script.js

function validarLogin(event) {
    event.preventDefault(); // Evitar que el formulario se envíe antes de la validación

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    // Limpiar mensaje de error
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Validar que los campos no estén vacíos

    if (username === 'juliana' || password === '3127') {
        // Si todo está bien, puedes proceder a enviar el formulario o hacer algo más
        alert('Formulario enviado correctamente!');
        // Aquí podrías enviar el formulario si la validación es exitosa
        // event.target.submit(); 
        return true;
    }
    if (username != 'juliana' || password != '3127') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, ingresa un usuario y una contraseña valida';
        return false;
    }

    if (username === '' || password === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, ingresa un usuario y una contraseña.';
        return false;
    }

    // Validación de usuario (mínimo 4 caracteres)
    if (username.length < 4) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'El nombre de usuario debe tener al menos 4 caracteres.';
        return false;
    }

    // Validación de contraseña (mínimo 6 caracteres)
    if (password.length < 4) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return false;
    }


}
