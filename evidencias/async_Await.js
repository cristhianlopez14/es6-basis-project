const axios = require('axios');

let config ={
      method: 'get',
      url: 'https://parallelum.com.br/fipe/api/v1/motos/marcas'
}

const motos = async()=>{
  try {
      let response = await axios(config)
       response.data.forEach(element => {
        console.log('..Linea..');
        console.log(` ${element.nome} `);
        console.log("<<<|-|>>>");
      });
      
      
  } catch (error) {
      
  }
}

motos()