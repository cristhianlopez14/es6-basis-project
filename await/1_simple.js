//1. importamos la dependencia
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint= 'https://pokeapi.co/api/v2/type'

const exito =(response)=> {
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`)
        console.log('*..-..+..._...+..-..*')
    })
    //console.log(JSON.parse(response).results);
}

const fallo=(status)=> {
    console.log(status);
}

const get_data=(endpoint)=> {
     //2. creamos el objeto de la API
    let http = new XMLHttpRequest()

    //3. abrir conexion de la API
    http.open('get', endpoint)

    //4. enviar la solicitud(request) a la API
    http.send()

    //5. hacer el tratamiento de la response
    
    //Definir una promesa para la conexion a la API

    let promise= new Promise((resolve, reject)=>{
        let http = new XMLHttpRequest()

        http.open('get', endpoint)

        http.send()

        http.onload = function(){
            if (http.status === 200) {
                resolve(http.responseText)
            }else{
                reject(http.status)
            }
        }

    })
        return promise;
}

async function f(){
    try {
    let response = await get_data(endpoint)
    exito(response);
    } catch (error) {
        fallo(error)
    }
    
}
f()
       