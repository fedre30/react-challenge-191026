import express from "express";
import connection from '../connection';

const router = express.Router();


// "/students/" list all students
router.get("/",(req,res)=>{
    connection.query("SELECT * from user",(err,rows)=>{
        err ? res.json(err) : res.json(rows);
    });
});


// "/students/:id" see one student profile
router.get("/:id",(req,res)=>{
    connection.query(`SELECT * from user where id=${req.params.id}`,(err,rows)=>{
        err ? res.json(err) : res.json(rows);
    });
});


// "/students/find/:name" search student by name
router.get("/find/:name",(req,res)=>res.send(`Hello ${req.params.name}`));

// "/students/:id/skills" list all skills of this student
router.get("/:id/skills",(req,res)=>{
    connection.query(`
            Select s.name, us.rate from skills as s
                inner join user_skills as us on us.id_skills = s.id
                inner join user as u on u.id = us.id_user
                where u.id="${req.params.id}"
        `,(err,rows)=>{
        err ? res.json(err) : res.json(rows);
    });
});

// "/students/:id/skills/:skill" add a new skill to this student
router.get("/:id/skills/:skill",(req,res)=>{
    connection.query(`
            Select s.name, u.name, u.firstname, u.nickname from skills as s
                inner join user_skills as us on us.id_skills = s.id
                inner join user as u on u.id = us.id_user
                where s.name="${req.params.skill}" and u.id="${req.params.id}"
        `,(err,rows)=>{
        err ? res.json(err) : res.json(rows);
    });
});


export default router;