import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_Host,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_Name
});
connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else{
        console.log("an error occured");
    }
});

export default connection;