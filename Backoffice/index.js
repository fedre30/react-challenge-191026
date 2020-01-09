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

app.get("/match",(req,res)=>{
    connection.query(`
    select u.name, u.firstname, GROUP_CONCAT(s.category) as skill_category, GROUP_CONCAT(s.name) as skill_name
    from user as u
        inner join user_skills us on us.id_user = u.id
        inner join skills s on s.id = us.id_skills
        GROUP BY u.id
        ORDER BY RAND()
    `,(err,rows)=>{
        res.send(match(rows,3));
    })
});


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
                res.json(data.role)
            }
            else if(data.role === "admin"){
                res.json(data.role);
            }
        }
        else {
            res.json("authentification failed")
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
 * => array of user
 *      loop to find attribute
 *      
 * @param {Array} rows 
 */

const match = (students, grpl) => {
    const groups = [];
    const nbgroup = Math.ceil(students.length/grpl);
    let i = 2;

    const users = students.map(student => {
        let count = {};
        let category = student.skill_category.split(",")
        category.forEach(cat => {
            count[cat] = count[cat] ? count[cat] + 1 : 1;
        });
        student["role"] = Object.keys(count).reduce((a, b) => {
            let role = null;
            count[a] > count[b] //if
            ? role = a //do
            : (     //else 
                count[a] == count[b] //if
                    ? role = "hybrid" //do 
                    : role = b //else
              )
            ;
            return role;
        }); 
       return student;
    });

    while (groups.length < nbgroup) {
        groups.length === 0 
        ? groups.push(users.slice(0,grpl))
        : groups.push(users.slice(grpl*(i-1), grpl*i)) &&  i++
        ;
    }
    return groups
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
 *  "/students/find/skills/:category" find all student by category skill
 * 
 *  @todo: 
 * 
 *  limit adding promotions to admin role
 *      "/skills" => list of all skills only for admin
 *      "/skills/add" => add a new skill only for admin
 *      "/matching" => do matching
 *      
 */