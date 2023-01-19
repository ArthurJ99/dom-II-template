const paragrafo = document.getElementById("mensagem");

const checaCaps = (event) => {
    console.log(event);

    if (event.key === "Shift") {
    paragrafo.innerHTML = "Segurou o shift";
    } else {
    paragrafo.innerHTML = " ";
    }
};
