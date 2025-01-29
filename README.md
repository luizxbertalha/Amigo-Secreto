<h1 align="center"> Amigo Secreto </h1>
<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUDED&color=GREEN&style=for-the-badge"/>
</p>

Este é um projeto simples para adicionar amigos a uma lista e sortear um deles aleatoriamente. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript.

## Funcionalidades

- **Adicionar Amigos**: Insira o nome de um amigo no campo de texto e clique no botão "Adicionar" ou pressione "Enter" para adicioná-lo à lista.
- **Exibir Lista de Amigos**: A lista de amigos adicionados é exibida na tela.
- **Sortear Amigo**: Clique no botão "Sortear" para escolher aleatoriamente um amigo da lista.

## Como Usar

1. **Adicionar Amigos**:
   - Digite o nome do amigo no campo de texto.
   - Clique no botão "Adicionar" ou pressione "Enter" para adicionar o nome à lista.

2. **Sortear Amigo**:
   - Clique no botão "Sortear" para escolher aleatoriamente um amigo da lista.
   - O nome do amigo sorteado será exibido na tela.

## Estrutura do Projeto

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização da página (se necessário).
- **JavaScript**: Lógica para adicionar amigos, exibir a lista e sortear um amigo.

## Como Executar
- Clone o repositório ou baixe os arquivos do projeto.
- Abra o arquivo index.html no seu navegador.
- Adicione os amigos e sorteie 

## Código JavaScript

O código JavaScript é responsável por:
- Adicionar amigos à lista.
- Exibir a lista de amigos na tela.
- Sortear um amigo aleatoriamente.

```javascript
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
    }
}
