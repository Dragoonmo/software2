const models=require("../models")
const db=require("../dbb/db")
function home_vat(req,res){
    if (req.session.username&&req.session.roleee) {
        models.user_info.findOne({ where: { email: req.session.username } }).then((resp) => {
            sql='select * from courses join follow_t on follow_t.courss_id_f=courses.id where follow_t.vet=? AND special=?'
            db.query(sql,[req.session.username,1],(err, result) => {
                if (err) return res.json(err)
                else {
                var sqll='select * from problims LIMIT 3'
                db.query(sqll,(err, resultt) =>{
                    
                    if (err)return res.json(err) 
                    else{
                        sql='select* from event_gen limit 4'
                        db.query(sql,(err,resulttt)=>{
                            if (err) console.log(err)
                            else{
                                return res.json({valid:true,username:resp.first_name,result,resultt,resulttt,resultttt:"you have new notifications"}) 
                        }
                        })
                }})
                }
            })
            }
            )
            .catch((err) => {
                return res.json({ valid: false });
            });
    } else {
        return res.json({ valid: false });
    }   
}
function all_C(req,res){
    if(req.session.username&&req.session.roleee){
    sql='select * from courses join follow_t on follow_t.courss_id_f=courses.id  where follow_t.vet=?'
    db.query(sql,[req.session.username],(error,result)=>{
        if (error){console.log(error)}
        else {
            return res.json({valid:true,result})
        }
    })
}
else {return res.json({valid:false})}
}
function show_requsts(req,res){
    if(req.session.username&&req.session.roleee){
        sql='select * from courses join follow_t on follow_t.courss_id_f=courses.id  where follow_t.vet=? AND follow_t.special=?'
        db.query(sql,[req.session.username,0],(error,result)=>{
        if(error){console.log(error)}
        else {
            return res.json({valid:true,result})
        }
    })
}
else{
    res.json({valid:false})
}
}
function accept_req(req,res){
    if(req.session.roleee){
        var sql='update follow_t set special=? where f_id=?'
        var id=req.params.id
        db.query(sql,[1,id],(error,result)=>{
            if(error) console.log(error)
            return res.json({valid:true,result})
        })
    }
    else {return res.json({valid:false})}
}
function show_all_doc(req,res){
    if (req.session.username) {

    sql='select * from user_infos where rolee=?'
    db.query(sql,['doc'],(error,result)=>{
        if(error){console.log(error)}
        else {
            return res.json({valid:true,result})
        }
    })
    }
    else {
        res.json({valid:false})
    }
}
function show_profile_doc(req,res){
    var id= req.params.id
    sql='select * from user_infos join teacherss on user_infos.id=teacherss.user_id where user_infos.id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) console.log(err)
        return res.json({valid:true,result})
    })
}
function add_req(req,res){
    id=req.params.id
    id2=req.params.id2
    sq='select email from user_infos where id=?'
    db.query(sq,[id],(error,result)=>{
        if(error)console.log(error)
        var sql1= "INSERT follow_t (courss_id_f,vet,owner,special) VALUES('" + id2 + "','" + result[0].email + "','" + req.session.username + "','" + 0 + "')"              
        db.query(sql1,(err,result1)=>{
            return res.json({valid:true,result:result1})
        })
    })
}

function show_all_comon_prob(req,res){
    if (req.session.username&&req.session.roleee){
    sql='select * from tip'
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json({result,valid:true})
    }
    )
}
    else {return res.json({valid:false})}
}
function add_advice(req,res){
    if(req.session.roleee=='doc'){
    var name=req.body.Tip

    var sql="INSERT tip  (tip) VALUES('" + name + "')"
    db.query(sql,(error,result)=>{
        if (error){console.log(error+"line 15")}
        else{
            return res.json({valid:true,result})
        }
    })
}
else{ 
    return res.json({valid:false})
}
}


    function show_profile_doc_p(req,res){
        var id=req.session.username
        sql='select * from user_infos join teacherss on user_infos.id=teacherss.user_id where user_infos.email=?'
        db.query(sql,[id],(err,result)=>{
            if(err) console.log(err)
    
            return res.json({valid:true,result})
        })
    }
module.exports={home_vat:home_vat,
    all_C:all_C,
    show_requsts:show_requsts, 
    accept_req:accept_req,
    show_all_doc,
    show_profile_doc:show_profile_doc,
    add_req:add_req,
    show_all_comon_prob:show_all_comon_prob,
    add_advice:add_advice,
    show_profile_doc_p:show_profile_doc_p
}