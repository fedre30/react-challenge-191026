import express from "express";
import connection from '../connection';

const router = express.Router();


// "/students/" list all students
// return list of promotion to filter it in front view
router.get("/",(req,res)=>{
    connection.query(`
        SELECT  
            u.name, u.firstname, u.nickname, u.email, u.reference_link,p.name as promotion_name, p.years as promotion_year, GROUP_CONCAT(s.name) as skill_name
        from user as u 
        inner join promotion p on p.id = u.id_promotion
        inner join user_skills us on us.id_user = u.id
        INNER JOIN skills s on s.id = us.id_skills
        GROUP BY u.id
        `,(err,rows)=>{
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

// "/students/find/skills/:category"
router.get("/find/skills/:category",(req,res)=>{
    connection.query(`
        Select GROUP_CONCAT(s.name) as skill_name, u.name, u.firstname, u.email, u.nickname, p.name as promotion_name, p.years
        from skills as s
        inner join user_skills us on us.id_skills = s.id
        inner join user u on u.id = us.id_user
        inner join promotion p on p.id = u.id_promotion
        where s.category = "${req.params.category}"
        GROUP BY u.id
        `,(err,rows)=>{
            res.json(rows);
    });
});

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

// student/:id/skills/add 
// render studentSkillsAdd form
router.get("/:id/skills/add",(req,res) => {
    res.render("Forms/studentsSkillsAdd",{id: req.session.userid})
});

// student/:id/skills/add  
/**
 * check if the requested skill is already register in db
 * if is not, add this skill
 * check if user already have this skill
 * if is not, add the juncture
 */
router.post("/:id/skills/add",(req,res)=>{
   /* connection.query(`
        Select name from skills where name = "${req.body.skill_name}"
    `,(err,rows)=>{
        !err && rows.length === 0 
            ? connection.query(`
                    insert into skills (name, category) VALUES ("${req.body.skill_name}","${req.body.skill_category}")
                `,(err,rows)=>{
                    console.log(`new skill ${req.body.skill_name} correctly add to db`)
              })
            : null;
    });*/

    connection.query(`
        Select s.name as skill_name, u.name, us.id_user, us.id_skills from skills as s 
            inner join user_skills us on us.id_skills = s.id
            inner join user u on u.id = us.id_user
            where u.id = "${req.params.id}" and s.name = "${req.body.skill_name}"
    `,(err,rows)=>{
        !err && rows.length === 0 
            ? connection.query(`
                    insert into user_skills (id_user,id_skills) 
                        select u.id, s.id from user as u 
                        inner join skills s on s.name = "${req.body.skill_name}"
                        where u.id = "${req.params.id}"
                `,(err,rows)=>{
                res.send("New skill correctly add to user 1");
              })
            : res.send("User 1 already have this skill");
    })
});

export default router;