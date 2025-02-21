// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigo;
let listaDeAmigos = [];
let boton_sortear = document.getElementById('boton_sortear');
let boton_reinicio = document.getElementById('reiniciarJuego_amigo');
let boton_agregar = document.getElementById('agregar');
let campo_lista = document.getElementById('listaAmigos');
let campo_resultado = document.getElementById('resultado');
let campo_entrada_texto = document.getElementById('amigo');

//capturar los nombres
function agregarAmigo(){
    boton_sortear.removeAttribute('disabled');
    nombreDeAmigo = campo_entrada_texto.value;
    if(nombreDeAmigo != ''){
        campo_lista.textContent = nombreDeAmigo;        
        listaDeAmigos.push(nombreDeAmigo);
        
        listarAmigos();
        limpiarCampo();
    }else{
        alert('Favor ingresar un nombre valido.');
    }
}

function limpiarCampo() {
    campo_entrada_texto.value = '';
}

//listar los nombres
function listarAmigos() {
    campo_lista.innerHTML = '';
    listaDeAmigos.forEach(
        amigo =>{
            let listaAmigos = document.createElement('li');
            listaAmigos.textContent = amigo;
            campo_lista.appendChild(listaAmigos);
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
    if(listaDeAmigos.length > 1 ){
        campo_resultado.textContent = `Su amigo secreto es: ${amigo}`;
        boton_reinicio.removeAttribute('disabled');
        boton_sortear.disabled = true;
        boton_agregar.disabled = true;
        campo_lista.innerHTML = '';
        listaDeAmigos = [];
    }else{
        alert('favor ingresar al menos dos nombres de amigos');
    }
}
//reiniciar el juego
function condicionInicial(){
    campo_lista.innerHTML = '';
    campo_resultado.innerHTML = '';
    listaDeAmigos = [];
}
function reiniciarJuegoAmigo(){
    boton_agregar.disabled = false;
    limpiarCampo();
    condicionInicial();
    boton_reinicio.setAttribute('disabled', true);
}
