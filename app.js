let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));

    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto); 
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del numero Secreto!');
asignarTextoElemento('p', 'Indica un número del 1 a 10');


// //PRACTICA
// //Crear una función que muestre "¡Hola, mundo!" en la consola.
// function mostrarConsola(texto){
//     console.log(texto);
// }
// mostrarConsola('Hola, mundo!');

// //Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
// function saludo(nombre){
//     console.log(`Hola ${nombre}`);
// }
// saludo(nombre = prompt('Escribe tu nombre:'));

// //Crear una función que reciba tres números como parámetros y devuelva su promedio.
// function promedio(valor1, valor2, valor3){
//     console.log(`El proemdio de los 3 nuemros es ${(valor1 + valor2 + valor3) / 3}`);
// }
// promedio(   valor1 = parseInt(prompt('Digita el valor 1:')), 
//             valor2 = parseInt(prompt('Digita el valor 1:')), 
//             valor3 = parseInt(prompt('Digita el valor 1:')));

// //Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// function numeroMayor(num1, num2){
//     if(num1 > num2){
//         console.log(`El numero ${num1} es mayor que el número ${num2}`);
//     }else{
//         console.log(`El numero ${num2} es mayor que el número ${num1}`);
//     }
// }
// numeroMayor(    num1 = parseInt(prompt('Digita el número 1:')), 
//                 num2 = parseInt(prompt('Digita el número 2:')));

// //Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
// function multiplicacion(num){
//     console.log(`El resultado de multiplicar ${num} * ${num} es ${num*num}`);
// }
// multiplicacion(num = parseInt(prompt('Digita el número:')));