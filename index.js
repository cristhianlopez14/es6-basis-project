//let : variables e idemntificadores simples
//number
//strings
//booleans

//let lenguaje = "PHP"

//const: funciones, arreglos, objetos

//template string
//console.log(`I hate ${lenguaje}`);


//template 
//console.log("I hate " + lenguaje);
import { materias } from './materias.js';
import pkg from 'colors';

//métodos de los objetos arreglo
//foreach: recorre un arreglo

materias.forEach( (materia)=>{
    if(materia.tipo === 'Técnica'){
    console.log(`materia: ${materia.nombre}`.yellow)
    console.log(`instructor: ${materia.instructor}`.red)
    }
} );

//map: construye un arreglo con base a otro

const profesores= materias.map((materia)=>{
    return materia.instructor
});

console.log(`${profesores}`)

//find: encontrar la primera ocurrencia(elemento) que cumpla con la citeria dada

const PHP = materias.find((materia)=>{
    return materia.instructor === "Tatiana Cabrera";
});    
console.log(PHP)

//push: agregar elemento

materias.push({
    id: 2,
        nombre: "Ingles",
        instructor: "Paola Ramos",
        tipo:"Transversal",
        notas:[
            4, 4.5, 4.2
        ]
})

//splice

materias.splice(1, 1);
console.log(materias)

//findIndex

let nombreA = materias.findIndex((materia => materia.id ==1));

materias[nombreA].instructor = "Lopez";

console.log(materias);