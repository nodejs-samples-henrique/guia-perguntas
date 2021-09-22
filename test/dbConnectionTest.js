const connection = require('../database/database')

connection.authenticate().then(() => {
    console.log("Conexão feita com o banco de dados")
    connection.close()
}).catch((err) => {
    console.log(err)
})