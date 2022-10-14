const needle = require('needle')

const url= 'https://pokeapi.co/api/v2/type';

needle('get', url) 
    .then((response)=>{
       return(response.body.results);
    })
    .then((body)=>{
        body.forEach(element => {
            console.log(`Tipo: ${element.name}`);
            console.log("*----------*");
        });
    }) 
    .catch(()=>{

    })