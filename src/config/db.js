

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});



let estado = "";

//verificador de que la conexion sea adecuada 
connection.connect((err) => {
    if(err){
        estado = "Error de conexion con BD: ";

        function estado3 () {
            return  estado
        }
        console.log(estado3())
        console.log(err);
        return;
    }

    estado = "conectado exitosamente con la BD";

    function estado2 () {
        return  estado
    }

    console.log(estado2())
})

module.exports = connection;