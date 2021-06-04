const mysql = require("../../bin/mysql").connection;

exports.getByCategory = (req,res,next) =>{
    const category_id = req.params.id;
    
    mysql.query(
        "SELECT i.id,i.nome,i.descricao,i.peso,i.altura,i.largura,i.imagem,i.imagem_d1"
        +" FROM item i JOIN itemcategoria ic ON (i.id = ic.item_id)"
        +" JOIN categoria c ON (ic.categoria_id = c.id)" 
        +" WHERE i.st_ativo = 'S' AND (i.itemsku_id is null or i.itemsku_id = 0)"
        +" AND c.id IN (?)"
        ,[category_id],
        (err,result,field)=>{
            if(err) res.status(200).send({error : "failed"})
            res.status(201).send(result)
        }
    )
}