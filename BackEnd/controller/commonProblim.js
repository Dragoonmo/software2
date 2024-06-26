const models=require("../models")
const db=require("../dbb/db")
function show_all_comon_prob(req,res){
    if (req.session.username)
    sql='select * from common_problems'
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
    }
    ) 
} 
function add_common_problem(req,res){
    if(req.session.username){
    const sqll='select * from user_infos where email=?'
    db.query(sqll,[req.session.username],(error,result)=>{
        if(error){console.log(error)}
        else if(result[0].rolee=='doc'){
            var title=req.body.Title
            var desc=req.body.Details
            var cours_type=req.body.Type
            var pub=req.session.username
            var sql="INSERT common_problems (title,disc,cours_type,publisher) VALUES('" + title + "','" + desc + "','" + cours_type + "','" + pub + "')"
            db.query(sql,(error,result)=>{
                if(error) {
                    console.log(error)
                }
                else {
                    return res.json({valid:true,result})
                }
            })
        }
        else{
            return res.json({message:"you dont have permissions "})
        }
    })

}
else {
    return res.json({valid:false})
}
}
function search(req,res){
    if(req.session.username){
        type=req.body.Type
    sql='select * from common_problems where cours_type=?'
    db.query(sql,[type],(error,result)=>{
        if(error){
            console.log(error)
        }
        else {
            return res.json({valid:true,result})
        }
    })
}
else   return res.json({valid:false})
}
function show_all_comon_prob2(req,res){
    
    sql='select * from common_problems'
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
    }
    )
}
module.exports={
    show_all_comon_prob:show_all_comon_prob,
    search:search,
    add_common_problem:add_common_problem,
    show_all_comon_prob2:show_all_comon_prob2

}