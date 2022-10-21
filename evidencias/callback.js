let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = 'https://zoo-animal-api.herokuapp.com/animals/rand'
 
function exito(response) {
    console.log(JSON.parse(response));
} 

function fallo(status) {
    console.log(status);
} 

function get_data(url, exito, fallo) {
    let http = new XMLHttpRequest()
    http.open('get', url)
    http.send()

    http.onload = function(){
        if (http.status === 200) {
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
    }
}

get_data(url, exito, fallo)