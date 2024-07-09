//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del Número Secreto'

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un Número del 1 al 10'
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroDeUsuario === numeroSecreto);{
    if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el Número Secreto en ${numeroIntentos} ${(numeroIntentos ===1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //El usuario no acertó.
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El Número Secreto es Menor');
            } else {
                asignarTextoElemento('p','El Número Secreto es Mayor');
            }
            }
            numeroIntentos++;
            limpiarCaja();
        }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else {
    //Si el numero generado esta incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto!');
    asignarTextoElemento('p',`Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();