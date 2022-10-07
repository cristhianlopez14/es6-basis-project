function llamarAlumno(alumno, callback) {
    let llamadaAlumno = `llamando a alumno: ${alumno}`
    //ejecutar la funcion callback
    callback(llamadaAlumno)
}

//definir funcion callback
const impimir= (texto) =>{
    console.log(texto)
}

//invocar la funsion principal llamarALumno
llamarAlumno("Cristhian López", impimir)
