function validar(){
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    if(password === '' || email === ''){
        alert('Por favor deber ingresar la contraseña y correo eléctronico');
        return false;
    }
}