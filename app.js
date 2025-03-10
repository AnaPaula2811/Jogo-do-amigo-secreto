let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) {
        exibirTextoNaTela("h2", "Ops! faltou digitar o nome do amigo secreto!");
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

    function atualizarLista () {
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        for (let i = 0; i < amigos.length; i++){
            let item = document.createElement("li");
            item.textContent = amigos[i];
            listaAmigos.appendChild(item);

        }
    }
    function sortearAmigo() {
         if (amigos.length === 0) {
            alert ("Digite o nome de um amigo!");
         }

         let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
         let resultado = document.getElementById("resultado");
         resultado.innerHTML = `O seu amigo secreto é: ${sorteado}`;
         
         let limparLista =document.getElementById("listaAmigos");
         limparLista.innerHTML = "";
         return;
}