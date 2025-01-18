
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
    }
}
document.querySelector('.button-add').addEventListener('click', adicionarAmigo);

document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigos(); 
    }
});


    
