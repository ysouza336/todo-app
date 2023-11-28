const mongoose = require('mongoose')
mongoose.Promise = global.Promise
{/*module.exports = mongoose.connect('mongodb+srv://teste-app:12345@applicationyuri.23veuz2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDb realizado com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDb não foi realizado com sucesso: " + erro);
});*/}

 


class DataBase {
    constructor() {
        this.mongoDataBase();
    }
    mongoDataBase() {
        mongoose.connect('mongodb://localhost/celke', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexão com MongoDb realizado com sucesso!");
        }).catch((erro) => {
            console.log("Erro: Conexão com MongoDb não foi realizado com sucesso: " + erro);
        });
    }
}

