//Importar common js
//Importar Commons
//const sumar = require("./operaciones")
//Importar ES6 module

import {sumar, restar, multiplicar, dividir, potencia} from "./operaciones.js"
 


//sumar dos numeros
const numero1 = 10;
const numero2 = 30;
console.log(`La suma de dos números es: ${sumar(numero1, numero2)}`)
console.log(`La resta de dos numeros es: ${restar(numero1, numero2)}`)
console.log(`La multiplicacion de dos numeros es: ${multiplicar(numero1, numero2)}`)
console.log(`La division de dos numeros es: ${dividir(numero1, numero2)}`)
console.log(`La potencia de dos numeros es: ${potencia(numero1, numero2)}`)


/*
//Manera legada o tradicional de escribir funciones
function Sumar(numero1, numero2) {
  console.log(`La suma de dos números es: ${numero1+numero2}`)
}

Sumar(numero1 , numero2);

//Manera con identificador, componentes funcionales
const sumar = function(numero1, numero2) {
    console.log(`La suma de dos números es: ${numero1+numero2}`)
  }

Sumar(numero1 , numero2);

//Sintaxis flecha, si tiene solo una instruccion se puede omitir los {}

const sumarr = (numero1, numero2) =>
    console.log(`La suma de dos números es: ${numero1+numero2}`)

Sumar(numero1 , numero2);


//Llamar a la funcion afuera de la misma

const Sumarr = (numero1, numero2) =>{    
    return numero1 + numero2
}
*/