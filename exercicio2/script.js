const input = document.getElementById("password");

function escondeSenha(event) {
    event.preventDefault();
    input.setAttribute("type", "password");
}

//dark mode

const form = document.getElementsByTagName("form");
console.log(form[0]);

form[0].setAttribute('class', 'dark')
