// Función para validar el formulario
function validarFormulario() {
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    // Validación básica de campos obligatorios
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Validación de formato de email (opcional)
    if (!validarEmail(email)) {
        alert("Por favor, introduce un email válido.");
        return false;
    }

    return true;
}

// Función para validar formato de email
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Event listener para el envío del formulario
document.querySelector("form").addEventListener("submit", function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Evitar que se envíe el formulario si la validación falla
    }
});
