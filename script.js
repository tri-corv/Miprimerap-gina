function showAlert() { alert('¡Hola, esta es una alerta desde JavaScript!'); }

const form = document.getElementById('myform');

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

form.addEventListener('submit', function(event) {event.preventDefault(); validateForm(); });

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
} 

function validateForm() {
    const input = document.getElementById('email')
    const inputValue = emailInput.value;

    if (!validateEmail(inputValue)) {
        alert('Por favor ingrese un correo electrónico válido.'); 
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}