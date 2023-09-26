let mysql = require('mysql');
let conection = mysql.createConnection({
    host: 'localhost',
    database: 'rutas',
    user: 'root',
    password: ''
});

conection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});

conection.query('ALTER TABLE usuario DROP ID_guia', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se eliminó la columna ID_guia de la tabla usuario");
        console.log(results);
    }
});

conection.query('ALTER TABLE usuario ADD ID_guia VARCHAR(255)', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se agregó la columna ID_guia a la tabla usuario");
        console.log(results);
    }
});

conection.query('SELECT * FROM guia ', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se seleccionaron todos los registros de la tabla guia");
        console.log(results);
    }
});

conection.query('SELECT * FROM usuario ', function(error, results, fields){
    if(error) {
        throw error;
    }else {
        console.log("Se seleccionaron todos los registros de la tabla usuario");
        console.log(results);
    }
});

conection.query('SELECT usuario.*, guia.nombre AS nombre_guia FROM usuario LEFT JOIN guia ON usuario.ID_guia = guia.ID;', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se seleccionaron todos los registros de la tabla usuario con el nombre del guía correspondiente");
        console.log(results);
    }
});

conection.query('SELECT guia.*, usuario.nombre AS nombre_usuario FROM guia LEFT JOIN usuario ON guia.ID = usuario.ID_guia; ', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se seleccionaron todos los registros de la tabla guia con el nombre del usuario correspondiente");
        console.log(results);
    }
});

conection.query("UPDATE usuario SET nombre = 'NuevoNombre', edad = 30 WHERE ID = '1'; ", function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se actualizó el registro con ID 1 de la tabla usuario");
        console.log(results);
    }
});

conection.query("UPDATE guia SET nombre = 'NuevoNombre', edad = 35 WHERE ID = '1'; ", function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se actualizó el registro con ID 1 de la tabla guia");
        console.log(results);
    }
});

//ejecutar una vez para que no se repita el usuario
conection.query("INSERT INTO usuario (ID,nombre, edad, ID_guia) VALUES ('XX-S3-23','NuevoUsuario', 25, '1'); ", function(error, results, fields){
    if(error){
        throw error;
    }else{
        console.log("Se insertó un nuevo registro en la tabla usuario");
        console.log(results);
    }
});

//ejecutar una vez para que no se repita el guia
conection.query("INSERT INTO guia (ID, nombre, edad) VALUES ('XX-GG3-23','NuevoGuia', 25); ", function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se insertó un nuevo registro en la tabla guia");
        console.log(results);
    }
});

conection.query("DELETE FROM usuario WHERE ID = '1'; ", function(error, results, fields){
    if(error) {
        throw error;
    }else{
        console.log("Se eliminó el registro con ID 1 de la tabla usuario");
        console.log(results);
    }
});

conection.end();