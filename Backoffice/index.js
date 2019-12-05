import express from 'express';
import bodyParser from "body-parser";
import reactViews from "express-react-views";
import Hasher from "password-hash";

//Router
import students from "./Routes/students";
import promotion  from './Routes/promotion';

//DB connexion
import connection from "./connection";
import { connect } from 'http2';

const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx",reactViews.createEngine());

app.listen(3000,()=>console.log("node server is now running"));

app.use("/students",students);
app.use("/promotions",promotion);

//GET METHODS
app.get("/",(req,res)=>res.send("Home page"));

app.get("/signup",(req,res)=>res.render("Forms/signup"));

app.get("/*",(req,res)=>res.send("404 not found"));

//POST METHODS
app.post("/signup",(req,res)=>{
    connection.query(`
        INSERT INTO user (name, firstname, nickname, password,email, cursus) VALUES 
            ("${req.body.name}", 
                "${req.body.firstname}",
                "${req.body.nickname}", 
                "${Hasher.generate(req.body.password)}", 
                "${req.body.email}",
                "${req.body.cursus}")
    `,(err)=>{
        err ? console.log(err) : res.send("User successfully registered");
    });

    connection.query(`
        UPDATE user set id_promotion = (
            Select id from promotion 
            where name = "${req.body.promotion_name}" AND 
                years = "${req.body.promotion_year}"
        ) where name = "${req.body.name}" AND
                firstname = "${req.body.firstname}" AND
                nickname = "${req.body.nickname}" AND
                email ="${req.body.email}"
    `,(err)=>{
        err ?console.log(err) : console.log("correctly updated")
    });
}); 


