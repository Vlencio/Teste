
function teste() {
    event.preventDefault();
    console.log("teste");
}

const botao = document.getElementById("botaoFormulario");

botao.addEventListener("click",teste);