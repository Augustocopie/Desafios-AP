let intentos = 3;
let userName = 'augusto';
let password = '123';

function checkLogin() {
    while (intentos > 0) {
        let inputUsername = prompt("Ingrese su nombre de usuario:");
        let inputPassword = prompt("Ingrese su contraseña:");
        
        if (inputUsername === userName && inputPassword === password) {
            alert('Inicio de sesión con éxito.');
            break;
        } else {
            intentos--;
            alert(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
        }
    }

    if (intentos == 0) {
        alert('Has agotado tus intentos. Por favor, intenta más tarde.');
    }
}

checkLogin();