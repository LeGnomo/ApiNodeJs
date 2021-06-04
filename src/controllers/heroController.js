const mysql = require("../../bin/mysql").connection;

exports.get = (req,res,next) =>{

    mysql.query(
        "SELECT custom1,custom2,chave,titulo,img1 FROM cmsitem WHERE tipo = ? AND st_ativo='S' ",
        ['bannerprincipal'],
        (err,result,field)=>{
        if(err) res.status(500).send({error : "failed"})
        res.status(201).send(result);
    })

}