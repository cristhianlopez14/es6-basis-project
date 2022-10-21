  const needle = require('needle')

  const api= 'https://www.balldontlie.io/api/v1/players'

  needle('get', api)
        .then((response)=>{
            return response.body.data
            
        })
        .then((data)=>{
            data.forEach(element => {
                console.log(`Jugador: ${element.first_name}`);
                console.log('_______________________');
            });
        })
        .catch()