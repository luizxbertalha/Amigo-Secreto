
let amigos = [];

function adicionarAmigos() {
    const inputAmigo = document.getElementById('amigo'); 
    const nomeAmigo = inputAmigo.value.trim(); 

    
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAmigo);
        inputAmigo.value = '';
        console.log(amigos);
        exibirAmigos();
    }
}
document.querySelector('.button-add').addEventListener('click', adicionarAmigos);
document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigos(); 
    }
});
function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos na lista para sortear.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    } }
