const euroService = require('../services/euroService'); // usar o controller para chamar o serviço e devolver o result. ao frontend;

exports.getKey = async (req, res) => {

    try{
        const key = await euroService.getKey(); // recebe o objeto key criado pelo service
        res.json(key);  
        //transforma o objeto em JSON para ser enviado para o client
        // por baixo  dos panos o express utiliza o stringify tambem 
        // podemos usar o ers.json() para facilitar o processo, pois este inclui os headers do
        // content-type e faz a conversao para string JSON automaticamente.
           /* 
           res.setHeader('Content-Type', 'application/json');
           res.send(JSON.stringify(key));
           */

    }catch(error) {
        res.status(500).json({message: 'Erro ao gerar chave!'});
    }

};