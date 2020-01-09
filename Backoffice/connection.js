import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else{
        console.log("an error occured" + err);
    }
});

export default connection;