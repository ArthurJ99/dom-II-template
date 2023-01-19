//pegar a lista
const lista = document.getElementById("lista");

//criar elemento
const primeiroItem = document.createElement("li");

//criar texto
const texto0 = document.createTextNode("Item 0");

//colocar o texto na li
console.log(primeiroItem);
primeiroItem.appendChild(texto0);

lista.insertAdjacentElement("afterbegin", primeiroItem);

//Criar item 5

const ultimoItem = document.createElement("li");
const texto5 = document.createTextNode("Item 5");
ultimoItem.appendChild(texto5);
lista.insertAdjacentElement("beforeend", ultimoItem);
