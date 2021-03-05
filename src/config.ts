import dotenv from "dotenv";

dotenv.config({path: __dirname + '/.env'});

export default {
    host : process.env.DBHOST || 'localhost',
    nombre : process.env.DBNAME || 'CochesDB',
    port : process.env.PORT || 3000
};