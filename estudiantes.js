let colors = require("colors")

const g1=["Laura","Carlos","Ana","Jorge"]

const g2=["Enrique","Jairo","Valeria",]

const g3=[...g1,"Diana", ...g2,"Duvan",]

const estudiante ={
    id: 1,
    nombre: 'Cristhian ',
    apellido: 'López',
    identificacion: 123456789,
    amigos: g3

}
//DESESTRUCTURAR EL ESTUDIANTE
let {nombre, identificacion} = estudiante;
console.log(nombre)



console.log(estudiante)

//DESESTRUCTURAR EL ARREGLO ESTUDIANTE
let[ ,C,A,J ] =g1;

console.log(A,J )