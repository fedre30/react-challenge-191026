import express from "express";
import connection from "../connection";

const router = express.Router();

// "/skills" see all promotion
router.get("/", (req,res)=>{
    connection.query("select * from promotion",(err,rows)=>{
        err ? res.json(err) : res.json(rows);
    });
});

router.get("/add",(req,res)=>{
    res.render("Forms/skills"); 
});

router.post("/add",(req,res)=>{ 
    connection.query(`select * from promotion where name = "${req.body.name}" and years = "${req.body.year}" `,(err,rows)=>{
        !err && rows.length === 0 
            ?   connection.query(` Insert into promotion (name, years) VALUES ("${req.body.name}","${req.body.year}")
                    `,(err)=>{
                        err ? console.log(err) : res.send("promotion add correctly");
                })
            :res.send("Une erreur s'est produite, la promotion existe peut être déjà");
    });
});
export default router;
