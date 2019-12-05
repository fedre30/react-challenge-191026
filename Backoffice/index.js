import express from 'express';
import expressSession from "express-session";
import bodyParser from "body-parser";
import reactViews from "express-react-views";
import Hasher from "password-hash";
//Router
import students from "./Routes/students";
import promotion  from './Routes/promotion';

//DB connexion
import connection from "./connection";

const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx",reactViews.createEngine());

app.listen(3000,()=>console.log("node server is now running"));

app.use("/students",students);
app.use("/promotions",promotion);

//GET METHODS
app.get("/",(req,res)=>res.send(`Home page`));

app.get("/signup",(req,res)=>res.render("Forms/signup"));

app.get("/login",(req,res)=>res.render("Forms/login"));

app.get("/*",(req,res)=>res.send("404 not found"));

//POST METHODS


// "/signup"
/**
 * if is not already registered
 * -> Insert into dabatase basic user information
 * -> Update foreign key promotion to add promotion to the user
 */
app.post("/signup",(req,res)=>{
    connection.query(`
        Select * from user 
        where name = "${req.body.name}" AND
             firstname = "${req.body.firstname}" AND
             nickname = "${req.body.nickname}" OR
             email ="${req.body.email}" 
    `,(err,rows)=>{
        !err && rows.length===0 
            ?
                connection.query(`
                INSERT INTO user (name, firstname, nickname, password,email, cursus,role) VALUES 
                    ("${req.body.name}", 
                        "${req.body.firstname}",
                        "${req.body.nickname}", 
                        "${Hasher.generate(req.body.password)}", 
                        "${req.body.email}",
                        "${req.body.cursus}",
                        "student")
                `,(err)=>{
                    err ? console.log(err) : res.send("User successfully registered");
                }) &&
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
                })
    
            : res.send("User Already Registered");
    });
}); 

// "/login"
app.post("/login", (req,res)=>{
    connection.query(`select * from user where email ="${req.body.email}"`,(err,rows)=>{
        let data = authenticate_user(rows,req.body.password)[0]
        if(data){
            req.session.userid = data.id;
            req.session.username = data.name;
            req.session.userfirstname = data.firstname;
            req.session.usernickname = data.nickname;
            req.session.useremail = data.email;
            req.session.userrole = data.role;
            if(data.role === "student"){
                res.redirect(`/students/${data.id}`)
            }
            else if(data.role === "admin"){
                res.send("hello admin");
            }
        }
        else {
            res.redirect("/login");
        }
    });
});

// HELPERS METHODS

/**
 * After sql query, loop the result
 *  verify query password hash with request password
 *  return single user information
 * @param {Array} rows 
 * @param {String} pwd 
 */
const authenticate_user = (rows, pwd) =>{
    const data =  rows.map(row=>{
         if(!Hasher.verify(pwd,row.password)){
             return null;
         }
         return row
     });
     return data;
 }


/**
 * LIST OF ROUTES 
 *  "/" => home
 *  "/*" => 404 not found
 *  "/signup" => get: form | post: add user into db
 *  "/login" => get: form | post: authentify the user and start session
 *  "/promotions" => list all promotions
 *  "/promotions/add" => get: form | post: add new promotion into db
 *  "/students" => list all student
 *  "/students/:id" => list all informations for 1 student
 *  "/students/:id/skills" => list all skills for 1 student
 *  "/students/:id/skills/add" => get: form | post: add a new skill to the user skills list
 *  "/students/find/:name" => Search students by name
 * 
 *  @todo: 
 *      "/administrateur" => list all admins
 *      "/administrateur/:id" => list all information for 1 admin
 *      "/students/:id/edit" => edit profile and add complementary informations
 *      "/administrateur/:id/edit" => edit profile and add complementary informations
 * 
 *  limit adding promotions to admin role
 *      "/skills" => list of all skills only for admin
 *      "/skills/add" => add a new skill only for admin
 *      "/matching" => do matching
 *      "/students/find/skills/:category" find all student by category skill
 */