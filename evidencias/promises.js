  const needle = require('needle')

  const api= 'http://asterank.com/api/mpc'

  needle('get', api)
        .then((response)=>{
            return(response.body)
        })
        .then((body)=>{
            body.forEach(element => {
                console.log(`Planeta: ${element}`);
                console.log('_______________________');
            });
        })
        .catch(()=>{
            console.log('fallo');
        })