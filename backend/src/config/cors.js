module.exports = function(req, res, next) {
    //response= esta adicionando cabecalhos na resposta que vai ser eviada ao browser dizendo ou não se e permitido o servico de acesso
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() //next tem a funcionalidade de não travar a aplicaçao ate as requisoçoes acima serem atendidas
}