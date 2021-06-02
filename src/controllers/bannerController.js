mysql = require("../../bin/mysql").connection;

// console.log(mysql);
exports.get = (req,res,next) =>{

    mysql.connect();
    mysql.query(
        "select * from cmsitem where tipo = ?",
        ['bannerprincipal'],
        (err,result,field)=>{
        if(err) res.status(500).send({error : "failed"})
        res.status(201).send(result);
    })

    mysql.end();
}