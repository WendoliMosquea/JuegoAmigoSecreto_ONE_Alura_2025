// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigo;
let listaDeAmigos = [];

//capturar los nombres
function agregarAmigo(){
    document.getElementById('boton_sortear').removeAttribute('disabled');
    nombreDeAmigo = document.getElementById('amigo').value;
    if(nombreDeAmigo != ''){
        let amigos = document.getElementById('listaAmigos');
        amigos.textContent = nombreDeAmigo;        
        listaDeAmigos.push(nombreDeAmigo);
        
        listarAmigos();
        limpiarCampo();
    }else{
        alert('Favor ingresar un nombre valido.');
    }
}

function limpiarCampo() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

//listar los nombres
function listarAmigos() {
    let listado = document.getElementById('listaAmigos');
    listado.innerHTML = '';
    listaDeAmigos.forEach(
        amigo =>{
            let listaAmigos = document.createElement('li');
            listaAmigos.textContent = amigo;
            listado.appendChild(listaAmigos);
        }
    )
}
//sortear los nombres para elegir uno
function elegirAmigo(lista) {
    let posicionAmigo = Math.floor(Math.random() * listaDeAmigos.length);
    return listaDeAmigos [posicionAmigo];
}
//presentar el nombre elegido
function sortearAmigo() {
    let amigo = elegirAmigo(listaDeAmigos);
    let resultado = document.getElementById('resultado');
    if(listaDeAmigos.length > 1 ){
        resultado.textContent = `Su amigo secreto es: ${amigo}`;
        document.getElementById('reiniciarJuego_amigo').removeAttribute('disabled');
        document.getElementById('boton_sortear').disabled = true;
    }else{
        alert('favor ingresar al menos dos nombres de amigos');
    }

}
//reiniciar el juego
function condicionInicial(){
    let listaAmigos = document.getElementById('listaAmigos');
    let listaResultado = document.getElementById('resultado');
    listaAmigos.innerHTML = '';
    listaResultado.innerHTML = '';
    listaDeAmigos = [];
}

function reiniciarJuegoAmigo(){
    limpiarCampo();
    condicionInicial();
    document.querySelector('#reiniciarJuego_amigo').setAttribute('disabled', true);
}
