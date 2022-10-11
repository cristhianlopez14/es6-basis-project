let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://rickandmortyapi.com/api/character';

const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`)
        console.log('*..-..+..._...+..-..*')
    })
}

const fallo = (status)=>{
    console.log(status);
}

const get_data= (endpoint, exito, fallo)=>{
    let http = new XMLHttpRequest()
    http.open('get', endpoint)
    http.send()
    http.onload = function(){
        if(http.status === 200){
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
    }

}
get_data(endpoint, exito, fallo)