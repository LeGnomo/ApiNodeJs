const mysql = require("../../bin/mysql").connection;


exports.getAll = (req,res,next)=>{

    mysql.query(
        "SELECT id,nome FROM categoria"
        +" WHERE st_ativo='S'"
        +" AND (categoria_id is null OR categoria_id = 0)"
        ,(err,result,field) =>{
            if(err) res.status(200).send({error : "api failed"})
            res.status(201).send(result)
    })
}