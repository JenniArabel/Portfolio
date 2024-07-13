// Función para validar el formulario
function validarFormulario() {
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    // Validación básica de campos obligatorios
    if (nombre === "" || email === "" || mensaje === "" || asunto === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Validación de formato de email (opcional)
    if (!validarEmail(email)) {
        alert("Por favor, introduce un email válido.");
        return false;
    }

    // Validación de longitud máxima de campos
    if (nombre.length > 50 || asunto.length > 50) {
        alert("Los campos no deben exceder los 50 caracteres.");
        return false;
    }
    if (mensaje.length > 300) {
        alert("El mensaje no debe exceder los 300 caracteres.");
        return false;
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
 

    return true;
}

